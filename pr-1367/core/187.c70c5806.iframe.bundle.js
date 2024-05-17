"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[187],{"./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watch});var _chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function watch(propertyName,options){var resolvedOptions=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.IA)({waitUntilFirstUpdate:!1},options);return(proto,propertyKey,descriptor)=>{var{update}=proto,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){watchedProperties.forEach((property=>{var _a,key=property;if(changedProps.has(key)){var oldValue=changedProps.get(key),newValue=this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!this.hasUpdated||null==(_a=descriptor.value)||_a.call(this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/chunks/chunk.7LJSHLJ4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>tokens});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),tokens=[(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Fri, 17 May 2024 10:37:02 GMT\n */\n\n:host {\n  --gds-ref-color-neutral000: #ffffff;\n  --gds-ref-color-neutral050: #f8f8f8;\n  --gds-ref-color-neutral100: #e9e9e9;\n  --gds-ref-color-neutral150: #eeeeee;\n  --gds-ref-color-neutral200: #dedede;\n  --gds-ref-color-neutral250: #cecece;\n  --gds-ref-color-neutral300: #ababab;\n  --gds-ref-color-neutral350: #adadad;\n  --gds-ref-color-neutral400: #868686;\n  --gds-ref-color-neutral450: #757575;\n  --gds-ref-color-neutral500: #494949;\n  --gds-ref-color-neutral525: #464646;\n  --gds-ref-color-neutral550: #333333;\n  --gds-ref-color-neutral600: #2c2c2c;\n  --gds-ref-color-neutral650: #272727;\n  --gds-ref-color-neutral700: #222222;\n  --gds-ref-color-neutral750: #1a1a1a;\n  --gds-ref-color-neutral800: #121212;\n  --gds-ref-color-blue100: #58b8ee;\n  --gds-ref-color-blue200: #41b0ee;\n  --gds-ref-color-blue300: #00adff;\n  --gds-ref-color-blue400: #2c9cd9;\n  --gds-ref-color-blue500: #0092e1;\n  --gds-ref-color-blue600: #007ac7;\n  --gds-ref-color-blue700: #0062bc;\n  --gds-ref-color-green100: #75b44a;\n  --gds-ref-color-green200: #60cd18;\n  --gds-ref-color-green300: #45b400;\n  --gds-ref-color-green400: #308800;\n  --gds-ref-color-red100: #f7706d;\n  --gds-ref-color-red200: #ff594f;\n  --gds-ref-color-red300: #f03529;\n  --gds-ref-color-red400: #d81a1a;\n  --gds-ref-color-red500: #c82a29;\n  --gds-ref-color-red600: #bb000c;\n  --gds-ref-color-red700: #9f000a;\n  --gds-ref-color-red800: #9e2120;\n  --gds-ref-color-purple100: #ad91dc;\n  --gds-ref-color-purple200: #7e52cc;\n  --gds-ref-color-purple300: #673ab6;\n  --gds-ref-color-purple400: #4f2C99;\n  --gds-ref-color-purple500: #4a328f;\n  --gds-ref-color-purple600: #3f2587;\n  --gds-ref-color-yellow100: #ffe182;\n  --gds-ref-color-yellow200: #ffc500;\n  --gds-ref-color-yellow300: #ffb400;\n  --gds-ref-color-yellow400: #f8a000;\n  --gds-ref-color-yellow500: #f0be47;\n  --gds-ref-color-yellow600: #ebab39;\n  --gds-ref-color-blue-5: #001127;\n  --gds-ref-color-blue-10: #001C39;\n  --gds-ref-color-blue-15: #00264B;\n  --gds-ref-color-blue-20: #00315D;\n  --gds-ref-color-blue-25: #003C70;\n  --gds-ref-color-blue-30: #004883;\n  --gds-ref-color-blue-35: #005397;\n  --gds-ref-color-blue-40: #005FAC;\n  --gds-ref-color-blue-45: #006CC1;\n  --gds-ref-color-blue-50: #0078D7;\n  --gds-ref-color-blue-55: #0085EC;\n  --gds-ref-color-blue-60: #1992FF;\n  --gds-ref-color-blue-65: #4EA0FF;\n  --gds-ref-color-blue-70: #6FAEFF;\n  --gds-ref-color-blue-75: #8ABBFF;\n  --gds-ref-color-blue-80: #A4C9FF;\n  --gds-ref-color-blue-85: #BCD6FF;\n  --gds-ref-color-blue-90: #D4E3FF;\n  --gds-ref-color-blue-95: #EBF1FF;\n  --gds-ref-color-blue-98: #F8F9FF;\n  --gds-ref-color-green-5: #001505;\n  --gds-ref-color-green-10: #00210E;\n  --gds-ref-color-green-15: #002D10;\n  --gds-ref-color-green-20: #003916;\n  --gds-ref-color-green-25: #00461D;\n  --gds-ref-color-green-30: #005323;\n  --gds-ref-color-green-35: #00602A;\n  --gds-ref-color-green-40: #006D31;\n  --gds-ref-color-green-45: #007B38;\n  --gds-ref-color-green-50: #138942;\n  --gds-ref-color-green-55: #29964D;\n  --gds-ref-color-green-60: #39A459;\n  --gds-ref-color-green-65: #48B265;\n  --gds-ref-color-green-70: #57C071;\n  --gds-ref-color-green-75: #65CE7E;\n  --gds-ref-color-green-80: #73DC8A;\n  --gds-ref-color-green-85: #81EA97;\n  --gds-ref-color-green-90: #8FF9A4;\n  --gds-ref-color-green-95: #C5FFCA;\n  --gds-ref-color-green-98: #EAFFE8;\n  --gds-ref-color-black: #000000;\n  --gds-ref-color-white: #FFFFFF;\n  --gds-ref-color-grey-5: #0D0D0C;\n  --gds-ref-color-grey-10: #1B1B18;\n  --gds-ref-color-grey-15: #282825;\n  --gds-ref-color-grey-20: #353531;\n  --gds-ref-color-grey-25: #42423D;\n  --gds-ref-color-grey-30: #505049;\n  --gds-ref-color-grey-35: #5D5D56;\n  --gds-ref-color-grey-40: #6A6A62;\n  --gds-ref-color-grey-45: #77776E;\n  --gds-ref-color-grey-50: #85857A;\n  --gds-ref-color-grey-55: #919188;\n  --gds-ref-color-grey-60: #9D9D95;\n  --gds-ref-color-grey-65: #A9A9A2;\n  --gds-ref-color-grey-70: #B6B6AF;\n  --gds-ref-color-grey-75: #C2C2BD;\n  --gds-ref-color-grey-80: #CECECA;\n  --gds-ref-color-grey-85: #DADAD7;\n  --gds-ref-color-grey-90: #E7E7E4;\n  --gds-ref-color-grey-95: #F3F3F2;\n  --gds-ref-color-grey-98: #F9F9F9;\n  --gds-ref-color-orange-5: #1A0F00;\n  --gds-ref-color-orange-10: #271900;\n  --gds-ref-color-orange-15: #352200;\n  --gds-ref-color-orange-20: #422C00;\n  --gds-ref-color-orange-25: #503700;\n  --gds-ref-color-orange-30: #503700;\n  --gds-ref-color-orange-35: #6E4C00;\n  --gds-ref-color-orange-40: #7D5700;\n  --gds-ref-color-orange-45: #8D6300;\n  --gds-ref-color-orange-50: #9D6E00;\n  --gds-ref-color-orange-55: #AE7A00;\n  --gds-ref-color-orange-60: #BE8600;\n  --gds-ref-color-orange-65: #CF9300;\n  --gds-ref-color-orange-70: #E19F00;\n  --gds-ref-color-orange-75: #F2AC00;\n  --gds-ref-color-orange-80: #FFBA30;\n  --gds-ref-color-orange-85: #FFCC77;\n  --gds-ref-color-orange-90: #FFDEAB;\n  --gds-ref-color-orange-95: #FFEED9;\n  --gds-ref-color-orange-98: #FFF8F3;\n  --gds-ref-color-red-5: #2B0200;\n  --gds-ref-color-red-10: #3E0400;\n  --gds-ref-color-red-15: #510700;\n  --gds-ref-color-red-20: #650B00;\n  --gds-ref-color-red-25: #790F00;\n  --gds-ref-color-red-30: #8E1400;\n  --gds-ref-color-red-35: #A31800;\n  --gds-ref-color-red-40: #BA1D00;\n  --gds-ref-color-red-45: #D02200;\n  --gds-ref-color-red-50: #E23010;\n  --gds-ref-color-red-55: #F53E1D;\n  --gds-ref-color-red-60: #FF5636;\n  --gds-ref-color-red-65: #FF7257;\n  --gds-ref-color-red-70: #FF8A73;\n  --gds-ref-color-red-75: #FFA08D;\n  --gds-ref-color-red-80: #FFB4A5;\n  --gds-ref-color-red-85: #FFC8BC;\n  --gds-ref-color-red-90: #FFDAD3;\n  --gds-ref-color-red-95: #FFEDE9;\n  --gds-ref-color-red-98: #FFF8F6;\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Fri, 17 May 2024 10:37:02 GMT\n */\n\n:host {\n  color-scheme: light;\n  --gds-sys-color-blue: #41b0ee;\n  --gds-sys-color-dark-blue-1: #41b0ee;\n  --gds-sys-color-dark-blue-2: #007ac7;\n  --gds-sys-color-green: #60cd18;\n  --gds-sys-color-dark-green-1: #45b400;\n  --gds-sys-color-dark-green-2: #308800;\n  --gds-sys-color-yellow: #ffc500;\n  --gds-sys-color-dark-yellow-1: #ffb400;\n  --gds-sys-color-dark-yellow-2: #f8a000;\n  --gds-sys-color-primary-text: #333333;\n  --gds-sys-color-secondary-text: #ababab;\n  --gds-sys-color-white-text: #ffffff;\n  --gds-sys-color-link-text: #0062bc;\n  --gds-sys-color-error-text: #9f000a;\n  --gds-sys-color-disabled-text: #adadad;\n  --gds-sys-color-red: #f03529;\n  --gds-sys-color-dark-red-1: #d81a1a;\n  --gds-sys-color-dark-red-2: #bb000c;\n  --gds-sys-color-purple: #673ab6;\n  --gds-sys-color-dark-purple-1: #4f2C99;\n  --gds-sys-color-dark-purple-2: #3f2587;\n  --gds-sys-color-base-white: #ffffff;\n  --gds-sys-color-base100: #f8f8f8;\n  --gds-sys-color-base200: #e9e9e9;\n  --gds-sys-color-base300: #dedede;\n  --gds-sys-color-base400: #cecece;\n  --gds-sys-color-base500: #adadad;\n  --gds-sys-color-base600: #868686;\n  --gds-sys-color-base700: #494949;\n  --gds-sys-color-base800: #333333;\n  --gds-sys-color-base900: #1a1a1a;\n  --gds-sys-color-accent-accent-green: #006D31;\n  --gds-sys-color-accent-on-accent-green: #FFFFFF;\n  --gds-sys-color-accent-accent-orange: #FFBA30;\n  --gds-sys-color-accent-on-accent-orange: #353531;\n  --gds-sys-color-background-background: #FFFFFF;\n  --gds-sys-color-background-background-dim: #F3F3F2;\n  --gds-sys-color-container-container: #F3F3F2;\n  --gds-sys-color-container-container-dim1: #E7E7E4;\n  --gds-sys-color-container-container-dim2: #DADAD7;\n  --gds-sys-color-container-container-bright: #FFFFFF;\n  --gds-sys-color-container-container-shade1: #353531;\n  --gds-sys-color-container-container-shade2: #1B1B18;\n  --gds-sys-color-container-container-shade3: #353531;\n  --gds-sys-color-container-container-disabled: #F9F9F9;\n  --gds-sys-color-container-container-positive: #006D31;\n  --gds-sys-color-container-container-negative: #BA1D00;\n  --gds-sys-color-container-container-negative-bright: #FFEDE9;\n  --gds-sys-color-content-content: #353531;\n  --gds-sys-color-content-content-inverse: #FFFFFF;\n  --gds-sys-color-content-content-secondary: #6A6A62;\n  --gds-sys-color-content-content-positive: #006D31;\n  --gds-sys-color-content-content-positive-bright: #EAFFE8;\n  --gds-sys-color-content-content-negative: #BA1D00;\n  --gds-sys-color-content-content-negative-bright: #FFF8F6;\n  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;\n  --gds-sys-color-content-content-disabled: #9D9D95;\n  --gds-sys-color-custom-custom-blue: #005FAC;\n  --gds-sys-color-custom-on-custom-blue: #D4E3FF;\n  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;\n  --gds-sys-color-custom-on-custom-blue-bright: #00315D;\n  --gds-sys-color-custom-custom-green: #003916;\n  --gds-sys-color-custom-on-custom-green: #EAFFE8;\n  --gds-sys-color-custom-custom-green-bright: #EAFFE8;\n  --gds-sys-color-custom-on-custom-green-bright: #003916;\n  --gds-sys-color-custom-custom-grey: #353531;\n  --gds-sys-color-custom-on-custom-grey: #E7E7E4;\n  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;\n  --gds-sys-color-custom-on-custom-grey-bright: #353531;\n  --gds-sys-color-primary-primary: #353531;\n  --gds-sys-color-state-layers-state-black: #000000 10%;\n  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;\n  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;\n  --gds-sys-color-state-layers-state-black-shade: #000000 60%;\n  --gds-sys-color-state-layers-state-positive: #006d31 10%;\n  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;\n  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;\n  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;\n  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;\n  --gds-sys-color-status-information-information: #353531;\n  --gds-sys-color-status-information-on-information: #FFFFFF;\n  --gds-sys-color-status-information-information-bright: #F3F3F2;\n  --gds-sys-color-status-information-on-information-bright: #353531;\n  --gds-sys-color-status-negative-negative: #BA1D00;\n  --gds-sys-color-status-negative-on-negative: #FFFFFF;\n  --gds-sys-color-status-negative-negative-bright: #FFEDE9;\n  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;\n  --gds-sys-color-status-warning-warning: #9D6E00;\n  --gds-sys-color-status-warning-on-warning: #FFFFFF;\n  --gds-sys-color-status-warning-warning-bright: #FFEED9;\n  --gds-sys-color-status-warning-on-warning-bright: #7D5700;\n  --gds-sys-color-status-positive-positive: #006D31;\n  --gds-sys-color-status-positive-on-positive: #FFFFFF;\n  --gds-sys-color-status-positive-positive-bright: #EAFFE8;\n  --gds-sys-color-status-positive-on-positive-bright: #006D31;\n  --gds-sys-color-status-notice-notice: #005FAC;\n  --gds-sys-color-status-notice-on-notice: #FFFFFF;\n  --gds-sys-color-status-notice-notice-bright: #EBF1FF;\n  --gds-sys-color-status-notice-on-notice-bright: #005FAC;\n  --gds-sys-color-stroke-stroke: #353531;\n  --gds-sys-color-stroke-stroke-variant1: #85857A;\n  --gds-sys-color-stroke-stroke-variant2: #CECECA;\n  --gds-sys-color-stroke-stroke-disabled: #9D9D95;\n  --gds-sys-color-stroke-stroke-notice: #005FAC;\n  --gds-sys-color-stroke-stroke-positive: #006D31;\n  --gds-sys-color-stroke-stroke-warning: #7D5700;\n  --gds-sys-color-stroke-stroke-negative: #BA1D00;\n  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;\n  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;\n  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Fri, 17 May 2024 10:37:02 GMT\n */\n\n:host {\n  --gds-sys-typography-weight-bold: 700;\n  --gds-sys-typography-weight-medium: 500;\n  --gds-sys-typography-weight-book: 450;\n  --gds-sys-typography-weight-regular: 400;\n  --gds-sys-typography-weight-light: 300;\n  --gds-sys-typography-size-label-overline: 14px;\n  --gds-sys-typography-size-label-input-medium: 14px;\n  --gds-sys-typography-size-label-input-large: 16px;\n  --gds-sys-typography-size-label-information-medium: 14px;\n  --gds-sys-typography-size-label-information-large: 16px;\n  --gds-sys-typography-size-label-small: 12px;\n  --gds-sys-typography-size-label-medium: 14px;\n  --gds-sys-typography-size-label-large: 16px;\n  --gds-sys-typography-size-body-small: 12px;\n  --gds-sys-typography-size-body-medium: 14px;\n  --gds-sys-typography-size-body-large: 16px;\n  --gds-sys-typography-size-title-small: 14px;\n  --gds-sys-typography-size-title-medium: 16px;\n  --gds-sys-typography-size-title-large: 22px;\n  --gds-sys-typography-size-headline-small: 24px;\n  --gds-sys-typography-size-headline-medium: 28px;\n  --gds-sys-typography-size-headline-large: 32px;\n  --gds-sys-typography-size-display-small: 40px;\n  --gds-sys-typography-size-display-medium: 64px;\n  --gds-sys-typography-size-display-large: 82px;\n  --gds-sys-typography-line-height-label-overline: 18px;\n  --gds-sys-typography-line-height-label-input-medium: 20px;\n  --gds-sys-typography-line-height-label-input-large: 20px;\n  --gds-sys-typography-line-height-label-information-medium: 20px;\n  --gds-sys-typography-line-height-label-information-large: 20px;\n  --gds-sys-typography-line-height-label-small: 16px;\n  --gds-sys-typography-line-height-label-medium: 20px;\n  --gds-sys-typography-line-height-label-large: 20px;\n  --gds-sys-typography-line-height-body-small: 16px;\n  --gds-sys-typography-line-height-body-medium: 20px;\n  --gds-sys-typography-line-height-body-large: 20px;\n  --gds-sys-typography-line-height-title-small: 20px;\n  --gds-sys-typography-line-height-title-medium: 24px;\n  --gds-sys-typography-line-height-title-large: 28px;\n  --gds-sys-typography-line-height-headline-small: 30px;\n  --gds-sys-typography-line-height-headline-medium: 36px;\n  --gds-sys-typography-line-height-headline-large: 40px;\n  --gds-sys-typography-line-height-display-small: 52px;\n  --gds-sys-typography-line-height-display-medium: 80px;\n  --gds-sys-typography-line-height-display-large: 98px;\n  --gds-sys-state-hover-state-layer-opacity: 0.10;\n  --gds-sys-grid-width-desktop-lg: 2560px;\n  --gds-sys-grid-width-desktop-md: 1440px;\n  --gds-sys-grid-width-desktop-sm: 1024px;\n  --gds-sys-grid-width-tablet: 768px;\n  --gds-sys-grid-width-mobile: 425px;\n  --gds-sys-grid-columns-24: 24;\n  --gds-sys-grid-columns-12: 12;\n  --gds-sys-grid-columns-8: 8;\n  --gds-sys-grid-columns-6: 6;\n  --gds-sys-grid-columns-4: 4;\n  --gds-sys-grid-columns-2: 2;\n  --gds-ref-size-full: 9999px;\n  --gds-ref-size-3-5: 14px;\n  --gds-ref-size-2-5: 10px;\n  --gds-ref-size-1-5: 6px;\n  --gds-ref-size-0-5: 2px;\n  --gds-ref-size-100: 400px;\n  --gds-ref-size-99: 396px;\n  --gds-ref-size-98: 392px;\n  --gds-ref-size-97: 388px;\n  --gds-ref-size-96: 384px;\n  --gds-ref-size-95: 380px;\n  --gds-ref-size-94: 376px;\n  --gds-ref-size-93: 372px;\n  --gds-ref-size-92: 368px;\n  --gds-ref-size-91: 364px;\n  --gds-ref-size-90: 360px;\n  --gds-ref-size-89: 356px;\n  --gds-ref-size-88: 352px;\n  --gds-ref-size-87: 348px;\n  --gds-ref-size-86: 344px;\n  --gds-ref-size-85: 340px;\n  --gds-ref-size-84: 336px;\n  --gds-ref-size-83: 332px;\n  --gds-ref-size-82: 328px;\n  --gds-ref-size-81: 324px;\n  --gds-ref-size-80: 320px;\n  --gds-ref-size-79: 316px;\n  --gds-ref-size-78: 312px;\n  --gds-ref-size-77: 308px;\n  --gds-ref-size-76: 304px;\n  --gds-ref-size-75: 300px;\n  --gds-ref-size-74: 296px;\n  --gds-ref-size-73: 292px;\n  --gds-ref-size-72: 288px;\n  --gds-ref-size-71: 284px;\n  --gds-ref-size-70: 280px;\n  --gds-ref-size-69: 276px;\n  --gds-ref-size-68: 272px;\n  --gds-ref-size-67: 268px;\n  --gds-ref-size-66: 264px;\n  --gds-ref-size-65: 260px;\n  --gds-ref-size-64: 256px;\n  --gds-ref-size-63: 252px;\n  --gds-ref-size-62: 248px;\n  --gds-ref-size-61: 244px;\n  --gds-ref-size-60: 240px;\n  --gds-ref-size-59: 236px;\n  --gds-ref-size-58: 232px;\n  --gds-ref-size-57: 228px;\n  --gds-ref-size-56: 224px;\n  --gds-ref-size-55: 220px;\n  --gds-ref-size-54: 216px;\n  --gds-ref-size-53: 212px;\n  --gds-ref-size-52: 208px;\n  --gds-ref-size-51: 204px;\n  --gds-ref-size-50: 200px;\n  --gds-ref-size-49: 196px;\n  --gds-ref-size-48: 192px;\n  --gds-ref-size-47: 188px;\n  --gds-ref-size-46: 184px;\n  --gds-ref-size-45: 180px;\n  --gds-ref-size-44: 176px;\n  --gds-ref-size-43: 172px;\n  --gds-ref-size-42: 168px;\n  --gds-ref-size-41: 164px;\n  --gds-ref-size-40: 160px;\n  --gds-ref-size-39: 156px;\n  --gds-ref-size-38: 152px;\n  --gds-ref-size-37: 148px;\n  --gds-ref-size-36: 144px;\n  --gds-ref-size-35: 140px;\n  --gds-ref-size-34: 136px;\n  --gds-ref-size-33: 132px;\n  --gds-ref-size-32: 128px;\n  --gds-ref-size-31: 124px;\n  --gds-ref-size-30: 120px;\n  --gds-ref-size-29: 116px;\n  --gds-ref-size-28: 112px;\n  --gds-ref-size-27: 108px;\n  --gds-ref-size-26: 104px;\n  --gds-ref-size-25: 100px;\n  --gds-ref-size-24: 96px;\n  --gds-ref-size-23: 92px;\n  --gds-ref-size-22: 88px;\n  --gds-ref-size-21: 84px;\n  --gds-ref-size-20: 80px;\n  --gds-ref-size-19: 76px;\n  --gds-ref-size-18: 72px;\n  --gds-ref-size-17: 68px;\n  --gds-ref-size-16: 64px;\n  --gds-ref-size-15: 60px;\n  --gds-ref-size-14: 56px;\n  --gds-ref-size-13: 52px;\n  --gds-ref-size-12: 48px;\n  --gds-ref-size-11: 44px;\n  --gds-ref-size-10: 40px;\n  --gds-ref-size-9: 36px;\n  --gds-ref-size-8: 32px;\n  --gds-ref-size-7: 28px;\n  --gds-ref-size-6: 24px;\n  --gds-ref-size-5: 20px;\n  --gds-ref-size-4: 16px;\n  --gds-ref-size-3: 12px;\n  --gds-ref-size-2: 8px;\n  --gds-ref-size-1: 4px;\n  --gds-ref-size-0: 0px;\n  --gds-sys-space-6xl: var(--gds-ref-size-14);\n  --gds-sys-space-5xl: var(--gds-ref-size-12);\n  --gds-sys-space-4xl: var(--gds-ref-size-10);\n  --gds-sys-space-3xl: var(--gds-ref-size-8);\n  --gds-sys-space-2xl: var(--gds-ref-size-6);\n  --gds-sys-space-xl: var(--gds-ref-size-5);\n  --gds-sys-space-spacer-6xl: var(--gds-ref-size-14);\n  --gds-sys-space-spacer-5xl: var(--gds-ref-size-12);\n  --gds-sys-space-spacer-4xl: var(--gds-ref-size-10);\n  --gds-sys-space-spacer-3xl: var(--gds-ref-size-8);\n  --gds-sys-space-spacer-2xl: var(--gds-ref-size-6);\n  --gds-sys-space-spacer-xl: var(--gds-ref-size-5);\n  --gds-sys-space-spacer-l: var(--gds-ref-size-4);\n  --gds-sys-space-spacer-m: var(--gds-ref-size-2);\n  --gds-sys-space-spacer-s: var(--gds-ref-size-1-5);\n  --gds-sys-space-spacer-xs: var(--gds-ref-size-1);\n  --gds-sys-space-spacer-2xs: var(--gds-ref-size-0-5);\n  --gds-sys-space-spacer-0: var(--gds-ref-size-0);\n  --gds-sys-space-padding-6xl: var(--gds-ref-size-14);\n  --gds-sys-space-padding-5xl: var(--gds-ref-size-12);\n  --gds-sys-space-padding-4xl: var(--gds-ref-size-10);\n  --gds-sys-space-padding-3xl: var(--gds-ref-size-8);\n  --gds-sys-space-padding-2xl: var(--gds-ref-size-6);\n  --gds-sys-space-padding-xl: var(--gds-ref-size-5);\n  --gds-sys-space-padding-l: var(--gds-ref-size-4);\n  --gds-sys-space-padding-m: var(--gds-ref-size-2);\n  --gds-sys-space-padding-s: var(--gds-ref-size-1-5);\n  --gds-sys-space-padding-xs: var(--gds-ref-size-1);\n  --gds-sys-space-padding-2xs: var(--gds-ref-size-0-5);\n  --gds-sys-space-padding-0: var(--gds-ref-size-0);\n  --gds-sys-space-margins-6xl: var(--gds-ref-size-14);\n  --gds-sys-space-margins-5xl: var(--gds-ref-size-12);\n  --gds-sys-space-margins-4xl: var(--gds-ref-size-10);\n  --gds-sys-space-margins-3xl: var(--gds-ref-size-8);\n  --gds-sys-space-margins-2xl: var(--gds-ref-size-6);\n  --gds-sys-space-margins-xl: var(--gds-ref-size-5);\n  --gds-sys-space-margins-l: var(--gds-ref-size-4);\n  --gds-sys-space-margins-m: var(--gds-ref-size-2);\n  --gds-sys-space-margins-s: var(--gds-ref-size-1-5);\n  --gds-sys-space-margins-xs: var(--gds-ref-size-1);\n  --gds-sys-space-margins-2xs: var(--gds-ref-size-0-5);\n  --gds-sys-space-margins-0: var(--gds-ref-size-0);\n  --gds-sys-radii-full: var(--gds-ref-size-15);\n  --gds-sys-radii-4xl: var(--gds-ref-size-12);\n  --gds-sys-radii-3xl: var(--gds-ref-size-9);\n  --gds-sys-radii-2xl: var(--gds-ref-size-7);\n  --gds-sys-radii-xl: var(--gds-ref-size-6);\n  --gds-sys-radii-l: var(--gds-ref-size-5);\n  --gds-sys-radii-m: var(--gds-ref-size-4);\n  --gds-sys-radii-s: var(--gds-ref-size-3);\n  --gds-sys-radii-xs: var(--gds-ref-size-2);\n  --gds-sys-radii-none: var(--gds-ref-size-0);\n  --gds-sys-grid-padding-3xl: var(--gds-ref-size-12);\n  --gds-sys-grid-padding-2xl: var(--gds-ref-size-9);\n  --gds-sys-grid-padding-xl: var(--gds-ref-size-7);\n  --gds-sys-grid-padding-l: var(--gds-ref-size-6);\n  --gds-sys-grid-padding-m: var(--gds-ref-size-5);\n  --gds-sys-grid-padding-s: var(--gds-ref-size-3);\n  --gds-sys-grid-padding-xs: var(--gds-ref-size-2);\n  --gds-sys-grid-padding-none: var(--gds-ref-size-0);\n  --gds-sys-grid-gap-3xl: var(--gds-ref-size-12);\n  --gds-sys-grid-gap-2xl: var(--gds-ref-size-9);\n  --gds-sys-grid-gap-xl: var(--gds-ref-size-7);\n  --gds-sys-grid-gap-l: var(--gds-ref-size-6);\n  --gds-sys-grid-gap-m: var(--gds-ref-size-5);\n  --gds-sys-grid-gap-s: var(--gds-ref-size-3);\n  --gds-sys-grid-gap-xs: var(--gds-ref-size-2);\n  --gds-sys-grid-gap-none: var(--gds-ref-size-0);\n  --gds-sys-grid-breakpoint-desktop-lg: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-desktop-md: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-desktop-sm: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-tablet: var(--gds-sys-grid-columns-12);\n  --gds-sys-grid-breakpoint-mobile: var(--gds-sys-grid-columns-4);\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Fri, 17 May 2024 10:37:02 GMT\n */\n\n:host {\n  --gds-sys-motion-play-state: running;\n  --gds-sys-motion-fill-mode: none;\n  --gds-sys-motion-direction: normal;\n  --gds-sys-motion-iteration-count: 1;\n  --gds-sys-motion-delay: 0s;\n  --gds-sys-motion-timing-function: ease;\n  --gds-sys-motion-duration: 1.2s;\n  --gds-sys-motion-easing: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n")]},"./dist/libs/core/src/chunks/chunk.EDHNUUZW.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>GdsElement});var _chunk_W7CV3QYI_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/index.js"),GdsElement=(__webpack_require__("./node_modules/reflect-metadata/Reflect.js"),class extends lit__WEBPACK_IMPORTED_MODULE_2__.WF{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new _chunk_W7CV3QYI_js__WEBPACK_IMPORTED_MODULE_0__.Q(this)}connectedCallback(){super.connectedCallback(),this.gdsElementName=(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.zu)(this.tagName.toLowerCase())||this.gdsElementName,this.setAttribute("gds-element",this.gdsElementName)}})}}]);