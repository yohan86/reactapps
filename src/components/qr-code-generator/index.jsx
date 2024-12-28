import { React, useState } from 'react';
import QRCode from 'react-qr-code';
import './style.css';

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const DrawQr = ()=> {
        setQrCode(input);
        setInput('')
    }


    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} name="qr-code" value={input} />
            <button disabled={input && input.trim !== ''? false:true} onClick={DrawQr}>Generate QR</button>
            <QRCode
                id="qr-code-value"
                value={qrCode}
                size={250}
            />
            <h3>{qrCode}</h3>
        </div>
    )
}
