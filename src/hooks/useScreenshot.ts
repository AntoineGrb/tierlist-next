import React from 'react';
import html2canvas from 'html2canvas';

export const useScreenshot = (capturedImages: string[], setCapturedImages: React.Dispatch<React.SetStateAction<string[]>>) => { 
    const screenshotList = () => { 
        const boardElement = document.getElementById('board');
        if (boardElement) {
            html2canvas(boardElement).then((canvas) => {
                const imageDataUrl = canvas.toDataURL('image/png'); //Convert canvas to image
                setCapturedImages((prevImages) => [...prevImages, imageDataUrl]);

                const imageWindow = window.open(); // Ouvrir une nouvelle fenêtre ou un nouvel onglet
                if (imageWindow) {
                    // Écrire le HTML pour afficher l'image dans la nouvelle fenêtre
                    imageWindow.document.write(`<img src="${imageDataUrl}" alt="Captured Image" style="max-width: 70vw; max-height: 95vh; display: block; margin: 0 auto;" />`);
                }

                console.log(capturedImages)
            })
        }
    }
    return { screenshotList };
}