<?php
/**
 * 3Dsion - Procesador de Cotizaciones
 * Envía la información del formulario y el archivo adjunto a info@3dsion.com
 */

// Permitir peticiones desde el frontend (CORS si fuera necesario, aunque en el mismo dominio no hace falta)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Recoger datos del formulario
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($_POST["telefono"]));
    $material = $_POST["material"] ?? "No especificado";
    $calidad = $_POST["calidad"] ?? "No especificada";
    $cantidad = $_POST["cantidad"] ?? "1";
    $tamano = $_POST["tamano"] ?? "No especificado";
    $uso = $_POST["uso"] ?? "No especificado";
    $comentarios = strip_tags(trim($_POST["comentarios"]));
    $necesitaModelado = isset($_POST["necesitaModelado"]) && $_POST["necesitaModelado"] === "true" ? "SÍ" : "NO";

    // 2. Configuración del Correo
    $to = "info@3dsion.com";
    $subject = "Nueva Cotizacion: " . $nombre . ($necesitaModelado === "SÍ" ? " (SOLICITA MODELADO)" : "");
    $boundary = md5(time());

    // Headers
    $headers = "From: Web 3Dsion <no-reply@3dsion.com>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";

    // Cuerpo del mensaje (Texto)
    $message = "--" . $boundary . "\r\n";
    $message .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    
    $body = "Nueva solicitud de cotización recibida desde el sitio web:\n\n";
    $body .= "--------------------------------------------------\n";
    $body .= "DATOS DE CONTACTO\n";
    $body .= "Nombre: $nombre\n";
    $body .= "Email: $email\n";
    $body .= "Telefono: $telefono\n";
    $body .= "--------------------------------------------------\n";
    $body .= "DETALLES TECNICOS\n";
    $body .= "Necesita Modelado: $necesitaModelado\n";
    $body .= "Material: $material\n";
    $body .= "Calidad: $calidad\n";
    $body .= "Cantidad: $cantidad\n";
    $body .= "Tamano aprox: $tamano\n";
    $body .= "Uso de la pieza: $uso\n";
    $body .= "--------------------------------------------------\n";
    $body .= "COMENTARIOS:\n$comentarios\n";
    $body .= "--------------------------------------------------\n";
    
    $message .= $body . "\r\n";

    // 3. Procesar Archivo Adjunto (si existe)
    if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] == UPLOAD_ERR_OK) {
        $file_name = $_FILES['archivo']['name'];
        $file_size = $_FILES['archivo']['size'];
        $file_tmp = $_FILES['archivo']['tmp_name'];
        $file_type = $_FILES['archivo']['type'];
        
        $handle = fopen($file_tmp, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));

        $message .= "--" . $boundary . "\r\n";
        $message .= "Content-Type: " . $file_type . "; name=\"" . $file_name . "\"\r\n";
        $message .= "Content-Disposition: attachment; filename=\"" . $file_name . "\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $message .= $encoded_content . "\r\n";
    }

    $message .= "--" . $boundary . "--";

    // 4. Enviar Email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Cotización enviada con éxito"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "No se pudo enviar el correo. Por favor, reintenta más tarde."]);
    }

} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
