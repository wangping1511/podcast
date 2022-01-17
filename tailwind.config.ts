import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
	darkMode: 'class',
	safelist: 'p-3 p-4 p-5',
	theme: {
		extend: {
			colors: {
				primary: '#409EFF',
				secondary: '#7d7d85',
				basicBlack: '#202022',
				basicWhite: '#d9d9db'
			},
		},
	},
	plugins: [formsPlugin],
})
