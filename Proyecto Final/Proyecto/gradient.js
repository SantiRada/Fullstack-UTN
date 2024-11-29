const gradientSpace = document.querySelectorAll('.gradient');
const colorText = document.querySelectorAll('.color-text');

function regenerateGradient(){
    let hue = Math.floor(Math.random() * 360);
    let hue2 = hue + Math.floor(Math.random() * 91);

    let saturation = Math.floor(Math.random() * (75 - 25 + 1)) + 25;
    let lightness = Math.floor(Math.random() * (75 - 25 + 1)) + 25;

    let color1 = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
    let color2 = "hsl(" + hue2 + "," + saturation + "%," + lightness + "%)";

    let rgb;
    for(let i = 0; i < gradientSpace.length; i++){
        gradientSpace[i].style.background = "linear-gradient(140deg, " + color1 + " 0%, " + color2 + " 100%)";
        rgb = gradientSpace[i].style.background.split('rgb')[1].replace('(','').replace(') 0%, ').replace('undefined','').split(',');
    }

    let colorForText = getContrastYIQ(rgb);

    for(let i = 0; i < colorText.length; i++){
        colorText[i].style.color = colorForText;
    }
}
function getContrastYIQ(rgb) {
    const [r, g, b] = rgb.map(c => c / 255);

    const calculateLuminance = c => 
        c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    const luminance = 0.2126 * calculateLuminance(r) +
                      0.7152 * calculateLuminance(g) +
                      0.0722 * calculateLuminance(b);

    const contrastWithBlack = (luminance + 0.05) / 0.05;
    const contrastWithWhite = 1.05 / (luminance + 0.05);

    return contrastWithBlack > contrastWithWhite ? 'black' : 'white';
}

regenerateGradient();