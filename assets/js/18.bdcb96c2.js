(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{194:function(t,e,r){"use strict";r.r(e);var a=r(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"core-product-page"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#core-product-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Core Product Page")]),t._v(" "),r("h2",{attrs:{id:"props"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("#")]),t._v(" Props")]),t._v(" "),r("p",[t._v("No props")]),t._v(" "),r("h2",{attrs:{id:"data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v(" Data")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("loading")]),t._v(" - if "),r("code",[t._v("true")]),t._v(" indicates the product is currently being loaded from the backend.")]),t._v(" "),r("li",[r("code",[t._v("favorite")]),t._v(" - an object that defines 1) if the current product is in the list of favorite products and 2) name of an icon that will be shown to indicate its status in relation to being in the list of favorite products.")]),t._v(" "),r("li",[r("code",[t._v("compare")]),t._v(" - defines if the current product is in compare list.")]),t._v(" "),r("li",[r("code",[t._v("product")]),t._v(" - a computed property that represents current product that is shown on the page. Initially gets its value from "),r("code",[t._v("product/productCurrent")]),t._v(" Vuex store getter. Includes all the options like size and color that user sets on the page.")]),t._v(" "),r("li",[r("code",[t._v("originalProduct")]),t._v(" - a computed property that represents current product in its initial state. Gets its value from "),r("code",[t._v("product/productOriginal")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("parentProduct")]),t._v(" - a computed property that represents current product parent product, if any. Gets its value from "),r("code",[t._v("product/productParent")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("attributesByCode")]),t._v(" - a computed property that returns the list of all product attributes by their code. Gets its value from "),r("code",[t._v("attribute/attributeListByCode")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("attributesById")]),t._v(" - a computed property that returns the list of all product attributes by their id. Gets its value from "),r("code",[t._v("attribute/attributeListById")]),t._v(" Vuex store getter. "),r("strong",[t._v("This prop is not used anywhere")]),t._v(".")]),t._v(" "),r("li",[r("code",[t._v("breadcrumbs")]),t._v(" - a computed property that represents breadcrumbs for the current product. Gets its value from "),r("code",[t._v("product/breadcrumbs")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("configuration")]),t._v(" - a computed property that represents an object that shows which attributes (like size and color) are chosen on the product. Gets its value from "),r("code",[t._v("product/currentConfiguration")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("options")]),t._v(" - a computed property that represents an object that shows what attributes (like size and color) with what values are available on the product. Gets its value from "),r("code",[t._v("product/currentOptions")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("category")]),t._v(" - a computed property representing a category object of the current product. Gets its value from "),r("code",[t._v("category/getCurrentCategory")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("productName")]),t._v(" - a computed property that represents a product name. Gets its value from "),r("code",[t._v("category/getCurrentCategory")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("productId")]),t._v(" - a computed property representing a product id. Gets its value from "),r("code",[t._v("category/getCurrentCategory")]),t._v(" Vuex store getter.")]),t._v(" "),r("li",[r("code",[t._v("isOnCompare")]),t._v(" - a computed property that checks if a given product is in compare list.")]),t._v(" "),r("li",[r("code",[t._v("image")]),t._v(" - a computed property that defines an image (thumbnail) that will be shown on the page and its size.")]),t._v(" "),r("li",[r("code",[t._v("customAttributes")]),t._v(" - this is a subset of "),r("code",[t._v("attributesByCode")]),t._v(" list of attributes that the current product has.")])]),t._v(" "),r("h2",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),r("h3",{attrs:{id:"unbound-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unbound-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Unbound methods")]),t._v(" "),r("h4",{attrs:{id:"filterchanged-filteroption"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filterchanged-filteroption","aria-hidden":"true"}},[t._v("#")]),t._v(" filterChanged (filterOption)")]),t._v(" "),r("p",[t._v("Sets attributes on the product according to what the user has chosen on the page. Dispatches "),r("code",[t._v("product/configure")]),t._v(" action.")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("This method is called when 'filter-changed-product' event is triggered, but it's not triggered anywhere in the code.")])]),t._v(" "),r("p",[r("em",[t._v("Parameters")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("filterOption")]),t._v(" - an object that represents an attribute that have changed on the product.")])]),t._v(" "),r("h4",{attrs:{id:"fetchdata-store-route"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fetchdata-store-route","aria-hidden":"true"}},[t._v("#")]),t._v(" fetchData (store, route)")]),t._v(" "),r("p",[t._v("Fetches current product data from the backend by dispatching "),r("code",[t._v("product/single")]),t._v(" action. Also dispatches several other actions to get breadcrumbs, product attributes, variants for configurable product, also to set sub-products if the product is grouped.")]),t._v(" "),r("p",[r("em",[t._v("Parameters")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("store")]),t._v(" - Vuex store")]),t._v(" "),r("li",[r("code",[t._v("route")]),t._v(" - global router object")])]),t._v(" "),r("h4",{attrs:{id:"loaddata-store-route"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#loaddata-store-route","aria-hidden":"true"}},[t._v("#")]),t._v(" loadData ({ store, route })")]),t._v(" "),r("p",[t._v("Dispatches "),r("code",[t._v("product/reset")]),t._v(" action that sets current product to original product, nullifies all the configuration and options, then calls "),r("code",[t._v("fetchData")]),t._v(" method to load current product data.")]),t._v(" "),r("p",[r("em",[t._v("Parameters")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("{store, route}")]),t._v(" - an object that consists of references to Vuex store and global router object.")])]),t._v(" "),r("h4",{attrs:{id:"statecheck"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#statecheck","aria-hidden":"true"}},[t._v("#")]),t._v(" stateCheck")]),t._v(" "),r("p",[t._v("If current product has a parent, redirects to a parent product page. Then checks if the current product is in the wishlist or in the compare list, sets "),r("code",[t._v("favorite")]),t._v(" and "),r("code",[t._v("compare")]),t._v(" props accordingly.")]),t._v(" "),r("p",[r("em",[t._v("Parameters")]),t._v("\nNo parameters")]),t._v(" "),r("h3",{attrs:{id:"bound-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bound-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Bound methods")]),t._v(" "),r("h4",{attrs:{id:"validateroute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validateroute","aria-hidden":"true"}},[t._v("#")]),t._v(" validateRoute")]),t._v(" "),r("p",[t._v("This method is called whenever the global "),r("code",[t._v("$route")]),t._v(" object changes its value. Calls "),r("code",[t._v("loadData")]),t._v(" and "),r("code",[t._v("stateCheck")]),t._v(" methods.")]),t._v(" "),r("p",[r("em",[t._v("Parameters")]),t._v("\nNo parameters")]),t._v(" "),r("h4",{attrs:{id:"addtolist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#addtolist","aria-hidden":"true"}},[t._v("#")]),t._v(" addToList")]),t._v(" "),r("p",[t._v("Adds the current product to the compare by dispatching "),r("code",[t._v("compare/addItem")]),t._v(" action accordingly.")]),t._v(" "),r("p",[r("em",[t._v("Parameters")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("list")]),t._v(" - compare")])]),t._v(" "),r("h4",{attrs:{id:"removefromlist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#removefromlist","aria-hidden":"true"}},[t._v("#")]),t._v(" removeFromList")]),t._v(" "),r("p",[t._v("Removes the current product from the compare by dispatching "),r("code",[t._v("compare/removeItem")]),t._v(" action accordingly.")]),t._v(" "),r("p",[r("em",[t._v("Parameters")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("list")]),t._v(" - compare")])]),t._v(" "),r("h2",{attrs:{id:"hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hooks","aria-hidden":"true"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),r("h3",{attrs:{id:"asyncdata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asyncdata","aria-hidden":"true"}},[t._v("#")]),t._v(" asyncData")]),t._v(" "),r("p",[t._v("Since the app is using SSR, this method prefetches and resolves the asynchronous data before rendering happens and saves it to Vuex store. On Product page this is done by calling "),r("code",[t._v("loadData")]),t._v(" method.")]),t._v(" "),r("p",[t._v("The "),r("code",[t._v("asyncData")]),t._v(" fires the "),r("code",[t._v("product-after-load")]),t._v(" event which can be used to populate the Vuex SSR store for additional data regarding the product.")]),t._v(" "),r("h3",{attrs:{id:"beforemount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforemount","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),r("p",[t._v("Calls "),r("code",[t._v("stateCheck")]),t._v(" method. Defines "),r("code",[t._v("product-after-priceupdate")]),t._v(" event listener which, if triggered, dispatches "),r("code",[t._v("product/setCurrent")]),t._v(" action that sets current product object in Vuex store. Also defines "),r("code",[t._v("filter-changed-product")]),t._v(" event listener which, if triggered, calls "),r("code",[t._v("filterChanged")]),t._v(" method. "),r("strong",[t._v("Currently 'filter-changed-product' event is not triggered anywhere.")])]),t._v(" "),r("h3",{attrs:{id:"beforedestroy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),r("p",[t._v("Removes event listeners that were defined in "),r("code",[t._v("beforeMount")]),t._v(" hook.")])])}],!1,null,null,null);o.options.__file="product.md";e.default=o.exports}}]);