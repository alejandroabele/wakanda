(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{IKdg:function(e,o,r){"use strict";r.d(o,"a",(function(){return d}));var a=r("fXoL"),t=r("xzt6");let d=(()=>{class e{constructor(e){this.odooRPC=e}getCategoriesPrices(){return this.odooRPC.searchRead("product.category",[["wkn_publish","=",!0]],["name","display_name","user_price","final_price","wkn_description"])}getSaleRank(){return this.odooRPC.searchRead("sale.rank",[["rank","<=",10]],["wkn_app_categ_id","category_name","name","product_id","rank"])}getCategories(){return this.odooRPC.searchRead("product.category",[["wkn_publish","=",!0]],["name","display_name","wkn_categ_image"])}getProducts(e){return this.odooRPC.searchRead("product.product",[["wak_published","=",!0],["categ_id","child_of",e]],["default_code","name","display_name","qty_available","potential_qty","immediately_usable_qty","list_price","final_price","user_price"])}createSaleOrder(e,o){return console.log("lines",e),console.log("code",o),this.odooRPC.call("sale.order","wkn_create",[e,o],{context:{display_default_code:!1}})}getPromos(e){return this.odooRPC.call("sale.order","read_promos",[[e]],{context:{display_default_code:!1}})}selectPromo(e,o=!1){return console.log("count",o),this.odooRPC.call("sale.order.promo","add_promo_read_promos",[[e],o],{})}getCarriers(e){return this.odooRPC.call("sale.order","read_delivery_methods",[[e]],{})}deliveryConfirm(e,o,r){return this.odooRPC.call("sale.order","wkn_delivery_confirm",[[e],o,r],{})}getOrder(e){return this.odooRPC.call("sale.order","read",[[e],["name","display_name","date_order","amount_total"]],{})}getOrderLines(e){return this.odooRPC.searchRead("sale.order.line",[["order_id","=",e]],["name","product_id","discount","product_uom_qty","price_total"],100,0,{display_default_code:!1})}getMyOrders(){return this.odooRPC.searchRead("sale.order",[],["name","display_name","state","date_order","amount_total"],50,0,{display_default_code:!1},"create_date desc")}}return e.\u0275fac=function(o){return new(o||e)(a.Sb(t.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);