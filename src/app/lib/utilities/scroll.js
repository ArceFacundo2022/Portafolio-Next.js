export const ScrollTo = (toSection, desplazamiento) => {
    const section = document.getElementById(`${toSection}`);
    if (section) {
        const sectionPosition = section.offsetTop;
        window.scrollTo({
            top: sectionPosition - desplazamiento, // Ajusta el valor de desplazamiento aquí
            behavior: 'smooth',
        });
    }
};