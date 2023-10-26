// Método con CommonJS: Export Module

// Esto funciona (importarlo con destructuración) porque estamos creando un objeto antes de exportarlos.

module.exports = {
                    sum: function (a, b) {
                        return a + b;
                    }
                };