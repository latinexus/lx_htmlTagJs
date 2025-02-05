class HtmlTag {
    constructor() {
        // Inicialización si fuera necesaria
    }

    /**
     * Genera una etiqueta HTML con apertura y cierre
     * // Para elementos tipo <div>contenido</div>
     * @param {string} contenido - Contenido dentro de la etiqueta
     * @param {object} opt - Atributos de la etiqueta
     * @param {string} envoltura - Nombre de la etiqueta
     * @returns {string} - Etiqueta HTML generada
     */
    blk(contenido = "", opt = {}, envoltura = "div")
    {
        const element = document.createElement(envoltura);

        // Manejar atributos
        this.setAttributes(element, opt);

        // Manejar contenido
        if (contenido) {
            element.innerHTML = contenido;
        }

        return element;
    }

    /**
     * Genera una etiqueta HTML de autocierre
     * // Para elementos tipo <input />
     * @param {object} opt - Atributos de la etiqueta
     * @param {string} envoltura - Nombre de la etiqueta
     * @returns {string} - Etiqueta HTML generada
     */
    noBlk(opt = {}, envoltura = "input")
    {
        const element = document.createElement(envoltura);
        this.setAttributes(element, opt);
        return element;
    }

    /**
     * Genera los atributos de la etiqueta HTML
     * // Metod auxiliar para manejar atributos
     * @param {object} opt - Atributos de la etiqueta
     * @returns {string} - String con los atributos formateados
     * @private
     */
    setAttributes(element, opt)
    {
        const opcionales = ["required", "readonly", "disabled"];

        // Asegurar que tenga ID
        if (!opt.id) {
            opt.id = `id_${this.uniqid()}`;
        }

        for (const [key, value] of Object.entries(opt))
        {
            if (opcionales.includes(key.toLowerCase()))
            {
                element.setAttribute(key, "");
            }
            else
            {
                element.setAttribute(key, value);
            }
        }
    }

    /**
     * Genera un ID único
     * @returns {string} - ID único
     * @private
     */
    uniqid()
    {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

}