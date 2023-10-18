/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans'],
      spyagency: ['SpyAgencySemi', 'sans-serif'],
    },
    screens: {
      xxl: '1400px',
      xl: '1200px',
      lg: '992px',
      md: '768px',
      sm: '576px'
    },
    extend: {
      colors: {
        primary: {
          100: '#E10A17',
          80: '#E73B45',
          60: '#ED6C74',
          40: '#F6B6B9',
          20: '#FCE7E8',
        },
        base: {
          100: '#131313',
          80: '#424242',
          60: '#717171',
          40: '#A1A1A1',
          20: '#E7E7E7',
          0: '#FFFFFF',
        },
        other: {
          100: '#6FCF97',
          customProfileBg: '#D9D9D9',
        },
      },
      backgroundImage: {
        'custom-gradient-red': 'linear-gradient(179deg, #A0000C 60.73%, rgba(77, 0, 6, 0.60) 117.12%)',
        'custom-gradient-black': 'linear-gradient(103deg, rgba(19, 19, 19, 0.90) 0%, rgba(11, 11, 11, 0.85) 100%)',
        'home-banner-bg': "url('/public/img/home-banner-img.png')",
        'home-banner-bg-mobile': "url('/public/img/home-banner-mobile.jpg')",
        'offer-class-bg': "url('/public/img/offer-img-1.png')",
        'offer-schedule-bg': "url('/public/img/offer-img-2.png')",
        'offer-gear-bg': "url('/public/img/offer-img-3.png')",
        'trainer-1-bg': "url('/public/img/trainer-img-1.png')",
        'trainer-2-bg': "url('/public/img/trainer-img-2.png')",
        'trainer-3-bg': "url('/public/img/trainer-img-3.png')",
        'trainer-4-bg': "url('/public/img/trainer-img-4.png')",
        'custom-gradient-fullblack':'linear-gradient(103deg, rgba(19, 19, 19, 0.90) 0%, rgba(11, 11, 11, 0.85) 100%)',
        'cta-banner-bg': "url('/public/img/cta-banner-img.png')",
        'plans-banner-bg': "url('/public/img/plans-banner-img.png')",
        'dropin-banner-bg': "url('/public/img/dropin-banner-img.png')",
        'account-banner-bg': "url('/public/img/account-banner-img.png')",
        'member-banner-bg': "url('/public/img/member-banner-bg.png')",
      },
      // Define custom padding values
      padding: {
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '60': '60px',
        '74': '74px',
        '120': '120px',
        '192': '192px',
      },
      margin: {
        '8':'8px',
        '10':'10px',
        '12':'12px',
        '14':'14px',
        '16':'16px',
        '20':'20px',
        '24':'24px',
        '32':'32px',
        '48':'48px',
        '60':'60px',
        '96':'96px',
        '130':'130px',
      },
      lineHeight: {
        '62': '62px',
      },
      fontSize: {
        'xs': '12px',     // Extra Small
        'sm': '14px',    // Small
        'medium': '16px',      // Medium
        'mlg': '18px',      // Medium
        'lg': '20px',    // Large
        'xl': '24px',     // Extra Large
        '2xl': '28px',     // 2 Extra Large
        '3xl': '32px',     // 3 Extra Large
        '4xl': '36px',     // 4 Extra Large
        '5xl': '40px',     // 5 Extra Large
        '6xl': '48px',     // 6 Extra Large
        'xxl': '200px',     // 6 Extra Large
      },
      maxWidth: {
        '550':'550px',
        '737':'737px',
        '808':'808px',
        '968':'968px',
      },
      height: {
        '500': '500px',
        '606': '606px',
      },
      width: {
        '78': '78%',
        '79': '79%',
        '808':'808px',
        '170':'170px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // Disable margin, padding, and box-sizing utilities by default
    margin: true,
    // padding: false,
    boxSizing: false,
    outline: false,
    boxShadow: false,
  },
}