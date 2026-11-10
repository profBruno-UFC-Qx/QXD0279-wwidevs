import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    theme: {
        defaultTheme: 'ovenFlowTheme',

        themes: {
            ovenFlowTheme: {
                dark: true,
                colors: {
                    background: '#0c0804',
                    surface: '#181009',
                    'surface-variant': '#221610',

                    primary: '#c94118',
                    secondary: '#f5a623',

                    'on-background': '#faf6f0',
                    'on-surface': '#faf6f0',
                    'on-primary': '#faf6f0',
                    'on-secondary': '#0c0804',

                    error: '#ef4444',
                    success: '#22c55e',
                    warning: '#f5a623',
                    info: '#3b82f6',

                    'text-muted': '#9d7d5a',
                    outline: '#382310',
                },
            },
        },
    },

    icons: {
        defaultSet: 'mdi',
    },
})
