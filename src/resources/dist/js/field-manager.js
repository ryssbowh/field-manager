/*! js-cookie v2.2.1 | MIT */
!function(e){var t;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var i=window.Cookies,n=window.Cookies=e();n.noConflict=function(){return window.Cookies=i,n}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var n in i)t[n]=i[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function i(n){function a(){}function r(t,i,r){if("undefined"!=typeof document){"number"==typeof(r=e({path:"/"},a.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var s=JSON.stringify(i);/^[\{\[]/.test(s)&&(i=s)}catch(e){}i=n.write?n.write(i,t):encodeURIComponent(i+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(t+"").replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o="";for(var d in r)r[d]&&(o+="; "+d,!0!==r[d]&&(o+="="+r[d].split(";")[0]));return document.cookie=t+"="+i+o}}function s(e,i){if("undefined"!=typeof document){for(var a={},r=document.cookie?document.cookie.split("; "):[],s=0;s<r.length;s++){var o=r[s].split("="),d=o.slice(1).join("=");i||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var l=t(o[0]);if(d=(n.read||n)(d,l)||t(d),i)try{d=JSON.parse(d)}catch(e){}if(a[l]=d,e===l)break}catch(e){}}return e?a[e]:a}}return a.set=r,a.get=function(e){return s(e,!1)},a.getJSON=function(e){return s(e,!0)},a.remove=function(t,i){r(t,"",e(i,{expires:-1}))},a.defaults={},a.withConverter=i,a}return i((function(){}))})),$((function(){$(document).on("click",'input[type="submit"]',(function(e){e.preventDefault();var t=$(this).parents("form");$(this).attr("data-action")&&$(t).find('input[name="action"]').val($(this).attr("data-action")),$(t).submit()})),$(document).on("change","select#groupAll",(function(e){e.preventDefault(),$("#fieldmapping .groupSelect select").val($(this).val());var t="noimport"==$(this).val()?"noimport":"include";$("#fieldmapping .groupSelectNested select").val(t)})),$(document).on("change",".select-type-matrix select, .select-type-neo select, .select-type-super-table select",(function(e){e.preventDefault();var t=$(this).parents("tr").data("row-id"),i="noimport"==$(this).val()?"noimport":"include";$('tr[data-row-id="'+t+'"].row-blocktype .groupSelectNested select').val(i),$('tr[data-row-id="'+t+'"].row-blocktype-field .groupSelectNested select').val(i)})),$(document).on("change",".select-blocktype select",(function(e){e.preventDefault();var t=$(this).parents("tr").data("row-id"),i=$(this).parents("tr").data("blocktype-id"),n="noimport"==$(this).val()?"noimport":"include";$('tr[data-row-id="'+t+'"][data-blocktype-id="'+i+'"].row-blocktype-field .groupSelectNested select').val(n)})),$(document).on("click","#newgroupbtn",(function(e){var t=prompt(Craft.t("field-manager","What do you want to name your group?"),"");if(t){var i={name:t};Craft.postActionRequest("fields/save-group",i,$.proxy((function(e,t){if("success"==t)if(e.success)$("#fieldmapping select#groupAll").append($('<option value="'+e.group.id+'">'+e.group.name+"</option>")).val(e.group.id),$("#fieldmapping .groupSelect select").append($('<option value="'+e.group.id+'">'+e.group.name+"</option>")).val(e.group.id);else if(e.errors){var i=[];for(var n in e.errors)i=i.concat(e.errors[n]);alert(Craft.t("field-manager","Could not create the group:")+"\n\n"+i.join("\n"))}else Craft.cp.displayError()}),this))}})),$(document).on("change","tr.group .field .checkbox",(function(e){e.preventDefault();var t=$(this).parents("tr.group").data("groupid"),i=$('tr.field[data-groupid="'+t+'"] .field .checkbox');$(this).hasClass("hasChecked")?($(this).removeClass("hasChecked"),i.prop("checked",!1)):($(this).addClass("hasChecked"),i.prop("checked",!0))})),$(document).on("change","#fieldmanager .checkbox",(function(e){e.preventDefault(),$("#fieldmanager .checkbox:checked").length>0?$(".export-btn").removeClass("disabled").prop("disabled",!1):$(".export-btn").addClass("disabled").prop("disabled",!0)})),$(".sidebar-nav a").on("click",(function(e){e.preventDefault();var t=$(this).attr("data-groupid");$(".sidebar-nav li").removeClass("active"),$(this).parent().addClass("active"),$("#fieldmanager tbody tr").hide(),$(".fieldmanager-audit-content").hide(),Cookies.set("fieldManager-groupId",t),$(".new-field-btn").data("groupid",t),"all"==t?($("#fieldmanager tbody tr[data-groupid]").show(),$(".fieldmanager-audit-content[data-groupid]").show()):($('#fieldmanager tbody tr[data-groupid="'+t+'"]').show(),$('.fieldmanager-audit-content[data-groupid="'+t+'"]').show())}));var e=Cookies.get("fieldManager-groupId");e&&$('.sidebar-nav a[data-groupid="'+e+'"]').trigger("click"),$("tr.group .clone-btn").on("click",(function(e){new Craft.FieldManager.CloneGroup($(this),$(this).parents("tr.group"))})),$("tr.field .clone-btn").on("click",(function(e){new Craft.FieldManager.CloneField($(this),$(this).parents("tr.field"))})),$("tr.group .go a").on("click",(function(e){e.metaKey||(e.preventDefault(),new Craft.FieldManager.EditGroup($(this),$(this).parents("tr.group")))})),$("tr.field .go a").on("click",(function(e){e.metaKey||(e.preventDefault(),new Craft.FieldManager.EditField($(this),$(this).parents("tr.field")))})),$(".new-field-btn").on("click",(function(e){e.metaKey||(e.preventDefault(),new Craft.FieldManager.EditField($(this),$(this)))})),$(".delete-group").on("click",(function(e){if($selectedGroup=$(this).parents("tr.group"),confirm(Craft.t("field-manager","Are you sure you want to delete this group and all its fields?"))){var t={id:$selectedGroup.data("groupid")};Craft.postActionRequest("fields/delete-group",t,$.proxy((function(e,t){"success"==t&&(e.success?location.href=Craft.getUrl("field-manager"):Craft.cp.displayError())}),this))}}))})),void 0===Craft.FieldManager&&(Craft.FieldManager={}),$((function(){Craft.FieldManager.HandleGeneratorWithSuffix=Craft.BaseInputGenerator.extend({generateTargetValue:function(e){var t=e.replace("/<(.*?)>/g","");t=(t=t.replace(/['"‘’“”\[\]\(\)\{\}:]/g,"")).toLowerCase(),t=(t=Craft.asciiString(t)).replace(/^[^a-z]+/,"");var i=Craft.filterArray(t.split(/[^a-z0-9]+/));t="";for(var n=0;n<i.length;n++)t+=0===n?i[n]:i[n].charAt(0).toUpperCase()+i[n].substr(1);return t+"_"}});var e={setValue:function(t,i,n){if(t.length){var a=t.shift();return a?(n[a]=e.setValue(t,i,n[a]||{}),n):n.push?(n.push(i),n):[i]}return i}};$.fn.serializeObject=function(){var t={},i=this.serializeArray(),n=null;return $.each(i,(function(){n=this.name.replace(/\]/g,"").split(/\[/),e.setValue(n,this.value,t)})),t}})),void 0===Craft.FieldManager&&(Craft.FieldManager={}),$((function(){Craft.FieldManager.CloneGroup=Garnish.Base.extend({$element:null,groupId:null,$form:null,$spinner:null,hud:null,init:function(e,t){this.$element=e,this.groupId=t.data("groupid"),this.$element.addClass("loading");var i={groupId:this.groupId,clone:!0};Craft.postActionRequest("field-manager/base/get-group-modal-body",i,$.proxy(this,"showHud"))},showHud:function(e,t){if(this.$element.removeClass("loading"),e.success){var i=$();this.$form=$("<div/>"),$('<input type="hidden" name="groupId" value="'+this.groupId+'">').appendTo(this.$form),$fieldsContainer=$('<div class="fields"/>').appendTo(this.$form),$fieldsContainer.html(e.html),Craft.initUiElements($fieldsContainer);var n=$('<div class="hud-footer"/>').appendTo(this.$form),a=$('<div class="buttons right"/>').appendTo(n);this.$cancelBtn=$('<div class="btn">'+Craft.t("field-manager","Cancel")+"</div>").appendTo(a),this.$saveBtn=$('<input class="btn submit" type="submit" value="'+Craft.t("field-manager","Clone")+'"/>').appendTo(a),this.$spinner=$('<div class="spinner hidden"/>').appendTo(a),i=i.add(this.$form),this.hud=new Garnish.HUD(this.$element,i,{bodyClass:"body",closeOtherHUDs:!1}),this.hud.on("hide",$.proxy((function(){delete this.hud}),this)),this.addListener(this.$saveBtn,"activate","saveGroupField"),this.addListener(this.$cancelBtn,"activate","closeHud"),new Craft.FieldManager.HandleGeneratorWithSuffix("#name","#prefix")}},saveGroupField:function(e){e.preventDefault(),this.$spinner.removeClass("hidden");var t=this.hud.$body.serialize();Craft.postActionRequest("field-manager/base/clone-group",t,$.proxy((function(e,t){this.$spinner.addClass("hidden"),e.error?(Garnish.shake(this.hud.$hud),$.each(e.error,(function(e,t){Craft.cp.displayError(t)}))):e.success?(Craft.cp.displayNotice(Craft.t("field-manager","Group cloned.")),location.href=Craft.getUrl("field-manager"),this.onFadeOut()):Craft.cp.displayError(Craft.t("field-manager","Could not clone group"))}),this))},closeHud:function(){this.hud.hide(),delete this.hud}}),Craft.FieldManager.EditGroup=Garnish.Base.extend({$element:null,groupId:null,$form:null,$spinner:null,hud:null,init:function(e,t){this.$element=e,this.groupId=t.data("groupid"),this.$element.addClass("loading");var i={groupId:this.groupId};Craft.postActionRequest("field-manager/base/get-group-modal-body",i,$.proxy(this,"showHud"))},showHud:function(e,t){if(this.$element.removeClass("loading"),e.success){var i=$();this.$form=$("<div/>"),$('<input type="hidden" name="groupId" value="'+this.groupId+'">').appendTo(this.$form),$fieldsContainer=$('<div class="fields"/>').appendTo(this.$form),$fieldsContainer.html(e.html),Craft.initUiElements($fieldsContainer);var n=$('<div class="hud-footer"/>').appendTo(this.$form),a=$('<div class="buttons right"/>').appendTo(n);this.$cancelBtn=$('<div class="btn">'+Craft.t("field-manager","Cancel")+"</div>").appendTo(a),this.$saveBtn=$('<input class="btn submit" type="submit" value="'+Craft.t("field-manager","Save")+'"/>').appendTo(a),this.$spinner=$('<div class="spinner hidden"/>').appendTo(a),i=i.add(this.$form),this.hud=new Garnish.HUD(this.$element,i,{bodyClass:"body",closeOtherHUDs:!1}),this.hud.on("hide",$.proxy((function(){delete this.hud}),this)),this.addListener(this.$saveBtn,"activate","saveGroupField"),this.addListener(this.$cancelBtn,"activate","closeHud")}},saveGroupField:function(e){e.preventDefault(),this.$spinner.removeClass("hidden");var t=this.hud.$body.serialize();Craft.postActionRequest("fields/save-group",t,$.proxy((function(e,t){this.$spinner.addClass("hidden"),"success"==t&&e.success?(location.href=Craft.getUrl("field-manager"),Craft.cp.displayNotice(Craft.t("field-manager","Field group updated.")),this.closeHud()):Garnish.shake(this.hud.$hud)}),this))},closeHud:function(){this.hud.hide(),delete this.hud}}),Craft.FieldManager.CloneField=Garnish.Modal.extend({fieldId:null,groupId:null,$body:null,$element:null,$buttons:null,$cancelBtn:null,$saveBtn:null,$footerSpinner:null,init:function(e,t){this.$element=e,this.fieldId=t.data("id"),this.groupId=t.data("groupid");var i=$('<div class="modal fieldsettingsmodal"></div>').appendTo(Garnish.$bod),n=$('<div class="body"><div class="spinner big"></div></div>').appendTo(i),a=$('<div class="footer"/>').appendTo(i);this.base(i,this.settings),this.$footerSpinner=$('<div class="spinner hidden"/>').appendTo(a),this.$buttons=$('<div class="buttons rightalign first"/>').appendTo(a),this.$cancelBtn=$('<div class="btn">'+Craft.t("field-manager","Cancel")+"</div>").appendTo(this.$buttons),this.fieldId?this.$saveBtn=$('<div class="btn submit">'+Craft.t("field-manager","Clone")+"</div>").appendTo(this.$buttons):this.$saveBtn=$('<div class="btn submit">'+Craft.t("field-manager","Add field")+"</div>").appendTo(this.$buttons),this.$body=n,this.addListener(this.$cancelBtn,"activate","onFadeOut"),this.addListener(this.$saveBtn,"activate","saveSettings")},onFadeIn:function(){var e={fieldId:this.fieldId,groupId:this.groupId};Craft.postActionRequest("field-manager/base/get-field-modal-body",e,$.proxy((function(e,t){e.success&&(this.$body.html(e.html),Craft.appendHeadHtml(e.headHtml),Craft.appendFootHtml(e.footHtml),Craft.initUiElements(this.$body),new Craft.HandleGenerator("#name","#handle"))}),this)),this.base()},onFadeOut:function(){this.hide(),this.destroy(),this.$shade.remove(),this.$container.remove(),this.removeListener(this.$saveBtn,"click"),this.removeListener(this.$cancelBtn,"click")},saveSettings:function(){var e=this.$body.find("form").serializeObject();e.fieldId=this.fieldId,this.$footerSpinner.removeClass("hidden"),Craft.postActionRequest("field-manager/base/clone-field",e,$.proxy((function(e,t){this.$footerSpinner.addClass("hidden"),e.error?$.each(e.error,(function(e,t){Craft.cp.displayError(t)})):e.success?(Craft.cp.displayNotice(Craft.t("field-manager","Field cloned.")),location.href=Craft.getUrl("field-manager"),this.onFadeOut()):Craft.cp.displayError(Craft.t("field-manager","Could not clone field"))}),this)),this.removeListener(this.$saveBtn,"click"),this.removeListener(this.$cancelBtn,"click")},show:function(){this.base()}}),Craft.FieldManager.EditField=Garnish.Modal.extend({fieldId:null,groupId:null,$body:null,$form:null,$element:null,$buttons:null,$cancelBtn:null,$saveBtn:null,$footerSpinner:null,init:function(e,t){this.$element=e,t&&(this.fieldId=t.data("id"),this.groupId=t.data("groupid"));var i=$('<div class="modal fieldsettingsmodal"></div>').appendTo(Garnish.$bod),n=$('<div class="body"><div class="spinner big"></div></div>').appendTo(i),a=$('<div class="footer"/>').appendTo(i);this.base(i,this.settings),this.$footerSpinner=$('<div class="spinner hidden"/>').appendTo(a),this.$buttons=$('<div class="buttons rightalign first"/>').appendTo(a),this.$cancelBtn=$('<div class="btn">'+Craft.t("field-manager","Cancel")+"</div>").appendTo(this.$buttons),this.$saveBtn=$('<div class="btn submit">'+Craft.t("field-manager","Save")+"</div>").appendTo(this.$buttons),this.$body=n,this.addListener(this.$cancelBtn,"activate","onFadeOut"),this.addListener(this.$saveBtn,"activate","saveSettings")},onFormSubmit:function(e){e.preventDefault()},onFadeIn:function(){var e={fieldId:this.fieldId,groupId:this.groupId};Craft.postActionRequest("field-manager/base/get-field-modal-body",e,$.proxy((function(e,t){e.success&&(this.$body.html(e.html),Craft.appendHeadHtml(e.headHtml),Craft.appendFootHtml(e.footHtml),Craft.initUiElements(this.$body),this.$form=this.$body.find("form"),this.addListener(this.$form,"submit","onFormSubmit"))}),this)),this.base()},onFadeOut:function(){this.hide(),this.destroy(),this.$shade.remove(),this.$container.remove(),this.removeListener(this.$saveBtn,"click"),this.removeListener(this.$cancelBtn,"click")},saveSettings:function(){this.$form.trigger("submit"),this.$footerSpinner.removeClass("hidden");var e=this.$form.serialize();Craft.postActionRequest("field-manager/base/save-field",e,$.proxy((function(e,t){this.$footerSpinner.addClass("hidden"),e.error?(Garnish.shake(this.$container),$.each(e.error,(function(e,t){Craft.cp.displayError(t)}))):e.success?(Craft.cp.displayNotice(Craft.t("field-manager","Field updated.")),location.href=Craft.getUrl("field-manager"),this.onFadeOut()):(Garnish.shake(this.$container),Craft.cp.displayError(Craft.t("field-manager","Could not update field")))}),this)),this.removeListener(this.$saveBtn,"click"),this.removeListener(this.$cancelBtn,"click")},show:function(){this.base()}})}));
//# sourceMappingURL=field-manager.js.map