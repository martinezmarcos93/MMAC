from flask import Flask, render_template, request, jsonify
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

SMTP_SERVER   = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT     = int(os.getenv("SMTP_PORT", 587))
SMTP_USER     = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
TO_EMAIL      = os.getenv("TO_EMAIL", SMTP_USER)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data     = request.get_json()
        nombre   = data.get('nombre', '').strip()
        contacto = data.get('contacto', '').strip()
        mensaje  = data.get('mensaje', '').strip()

        if not nombre or not contacto:
            return jsonify({"error": "Faltan nombre o contacto"}), 400

        # Correo a Marcos
        msg = EmailMessage()
        msg["Subject"] = f"Nueva consulta web de {nombre}"
        msg["From"]    = SMTP_USER
        msg["To"]      = TO_EMAIL
        msg.set_content(f"""
Nombre:   {nombre}
Contacto: {contacto}

Mensaje:
{mensaje if mensaje else "Sin mensaje adicional"}
        """)

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(SMTP_USER, SMTP_PASSWORD)
            smtp.send_message(msg)

        # Confirmación al cliente (solo si dejó email)
        if "@" in contacto and "." in contacto:
            msg_cliente = EmailMessage()
            msg_cliente["Subject"] = "Recibimos tu consulta – MMAC"
            msg_cliente["From"]    = SMTP_USER
            msg_cliente["To"]      = contacto
            msg_cliente.set_content(f"""
Hola {nombre},

Gracias por contactarte con MMAC (Marcos Martínez – Analista Contable).

Recibí tu consulta y te responderé a la brevedad.

Mensaje que nos enviaste:
----------------------------------------
{mensaje if mensaje else "Sin mensaje adicional"}
----------------------------------------

Mientras tanto podés escribirme directo por WhatsApp al 11-5106-2286.

Saludos,
Marcos Martínez
""")
            try:
                with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp2:
                    smtp2.starttls()
                    smtp2.login(SMTP_USER, SMTP_PASSWORD)
                    smtp2.send_message(msg_cliente)
            except Exception:
                pass  # Si falla la copia al cliente, no rompemos el flujo

        return jsonify({"success": True}), 200

    except Exception as e:
        print("Error enviando email:", str(e))
        return jsonify({"error": "Error interno, intentá más tarde"}), 500

if __name__ == '__main__':
    app.run(debug=True)
