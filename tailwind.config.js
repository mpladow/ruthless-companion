/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/App.tsx"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'black': {
					DEFAULT: '#090809', 100: '#020102', 200: '#030303', 300: '#050405', 400: '#060606', 500: '#090809', 600: '#3d363d', 700: '#716471', 800: '#a296a2', 900: '#d0cbd0'
				},
				'tea_green': {
					DEFAULT: '#cde7b0', 100: '#2a3e13', 200: '#547d26', 300: '#7fbb3a', 400: '#a6d473', 500: '#cde7b0', 600: '#d8ecc1', 700: '#e1f1d0', 800: '#ebf5e0', 900: '#f5faef'
				},
				'cambridge_blue': {
					DEFAULT: '#a3bfa8', 100: '#1d2a1f', 200: '#3a533e', 300: '#577d5e', 400: '#78a180', 500: '#a3bfa8', 600: '#b4cbb9', 700: '#c7d8ca', 800: '#dae5dc', 900: '#ecf2ed'
				},
				'gamboge': {
					DEFAULT: '#ec9f05', 100: '#2f2001', 200: '#5e3f02', 300: '#8d5f03', 400: '#bc7f04', 500: '#ec9f05', 600: '#fbb52b', 700: '#fcc860', 800: '#fdda95', 900: '#feedca'
				},
				'rust': {
					DEFAULT: '#bf3100', 100: '#260900', 200: '#4b1300', 300: '#711c00', 400: '#972600', 500: '#bf3100', 600: '#fd3f00', 700: '#ff6e3e', 800: '#ff9f7e', 900: '#ffcfbf'
				},
				'robin_egg_blue': {
					DEFAULT: '#55dde0', 100: '#0a3435', 200: '#136869', 300: '#1d9c9e', 400: '#27cfd2', 500: '#55dde0', 600: '#79e5e6', 700: '#9aebed', 800: '#bcf2f3', 900: '#ddf8f9'
				},
				'lapis_lazuli': {
					DEFAULT: '#33658a', 100: '#0a141c', 200: '#142837', 300: '#1f3c53', 400: '#29506e', 500: '#33658a', 600: '#4486b9', 700: '#72a5cb', 800: '#a1c3dc', 900: '#d0e1ee'
				},
				'ivory': {
					DEFAULT: '#f4f9e9', 100: '#3b4c15', 200: '#75982a', 300: '#a8d053', 400: '#cfe59f', 500: '#f4f9e9', 600: '#f7fbef', 700: '#f9fcf3', 800: '#fbfdf7', 900: '#fdfefb'
				},
			}
		}
	},
	plugins: [],
}

