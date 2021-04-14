function moveToSection(x) {
    switch (x) {
        case 'header_section_down_arrow':
            window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 'about_section_up_arrow':
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 'about_section_down_arrow':
            window.scroll({
                top: window.innerHeight*2,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 'education_section_up_arrow':
            window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 'education_section_down_arrow':
            window.scroll({
                top: window.innerHeight*3,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 'contact_section_up_arrow':
            window.scroll({
                top: window.innerHeight*2,
                left: 0,
                behavior: "smooth"
            });
            break;
    }
}