! function s(u, o, a) {
    function c(r, t) {
        if (!o[r]) {
            if (!u[r]) {
                var i = "function" == typeof require && require;
                if (!t && i) return i(r, !0);
                if (d) return d(r, !0);
                var e = new Error("Cannot find module '" + r + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            var n = o[r] = {
                exports: {}
            };
            u[r][0].call(n.exports, function(t) {
                var i = u[r][1][t];
                return c(i || t)
            }, n, n.exports, s, u, o, a)
        }
        return o[r].exports
    }
    for (var d = "function" == typeof require && require, t = 0; t < a.length; t++) c(a[t]);
    return c
}({
    1: [function(t, i, r) {
        "use strict";
        $(".phone").mask("+7 (999) 999-9999"), document.querySelectorAll(".accordion").forEach(function(t) {
            t.addEventListener("click", function(t) {
                var i = t.target.nextElementSibling;
                t.target.classList.toggle("active"), i.style.maxHeight ? i.style.maxHeight = null : i.style.maxHeight = i.scrollHeight + "px"
            })
        }), $(document).ready(function() {
                   $('.service-area .popup-trigger').on('click', function (event) {
            let attr = $(this).attr('data-var');
            if (attr == 'service1') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Повышение квалификации сотрудников');
                $('#serviceModal .modal-title').text('Повышение квалификации сотрудников');
    
            } else if (attr == 'service2') {
                $('#serviceModal input[name="form_subject"]').val('Помощь в вступлении в СРО по всей России');
                $('#serviceModal .modal-title').text('Помощь в вступлении в СРО по всей России');
    
            } else if (attr == 'service3') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Сертификация ISO');
                $('#serviceModal .modal-title').text('Сертификация ISO');
    
            } else if (attr == 'service4') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Аттестация промышленной безопасности');
                $('#serviceModal .modal-title').text('Аттестация промышленной безопасности');
    
            } else if (attr == 'service5') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Юридические услуги');
                $('#serviceModal .modal-title').text('Юридические услуги');
    
            } else if (attr == 'service6') {
                $('#serviceModal input[name="form_subject"]').val('СРО - Лицензии МЧС, Минкультуры и Ростехнадзора');
                $('#serviceModal .modal-title').text('Лицензии МЧС, Минкультуры и Ростехнадзора');
    
            }
            event.preventDefault();
        });

            setTimeout(function(){
                $('#quizModal').modal('show')
            }, 15000);
            jQuery.showGrid1 = function() {
                setTimeout(function() {
                    $(".quiz-grid").css("display", "none"), $("#grid-1").css("display", "block")
                }, 300), $(".quiz-buttons .progress_bar__label span").text("0%"), $(".quiz-buttons .progress_bar__field span").css("width", "0%")
            }, jQuery.showGrid2 = function() {
                setTimeout(function() {
                    $(".quiz-grid").css("display", "none"), $("#grid-2").css("display", "block")
                }, 300), $(".quiz-buttons .progress_bar__label span").text("20%"), $(".quiz-buttons .progress_bar__field span").css("width", "20%")
            }, jQuery.showGrid3 = function() {
                setTimeout(function() {
                    $(".quiz-grid").css("display", "none"), $("#grid-3").css("display", "block")
                }, 300), $(".quiz-buttons .progress_bar__label span").text("40%"), $(".quiz-buttons .progress_bar__field span").css("width", "40%")
            }, jQuery.showGrid4 = function() {
                setTimeout(function() {
                    $(".quiz-grid").css("display", "none"), $("#grid-4").css("display", "block")
                }, 300), $(".quiz-buttons .progress_bar__label span").text("60%"), $(".quiz-buttons .progress_bar__field span").css("width", "60%")
            }, jQuery.showGrid5 = function() {
                setTimeout(function() {
                    $(".quiz-grid").css("display", "none"), $("#grid-5").css("display", "block")
                }, 300), $(".quiz-buttons .progress_bar__label span").text("80%"), $(".quiz-buttons .progress_bar__field span").css("width", "80%")
            }, jQuery.showGrid6 = function() {
                setTimeout(function() {
                    $(".quiz-grid").css("display", "none"), $("#grid-6").css("display", "block")
                }, 300), $(".quiz-buttons .progress_bar__label span").text("95%"), $(".quiz-buttons .progress_bar__field span").css("width", "95%")
            }, $("#grid-1 input").change(function() {
                $(this).prop("checked") && ($("#grid-1 .answer-variants__textVariant label").removeClass("active"), $(this).parent().addClass("active"), $("#grid-1 .quiz-buttons__button_next").removeAttr("disabled")), jQuery.showGrid2()
            }), $("#grid-2 input").change(function() {
                $(this).prop("checked") && ($("#grid-2 .answer-variants__textVariant label").removeClass("active"), $(this).parent().addClass("active"), $("#grid-2 .quiz-buttons__button_next").removeAttr("disabled")), jQuery.showGrid3()
            }), $("#grid-3 input").change(function() {
                $(this).prop("checked") && ($("#grid-3 .answer-variants__textVariant label").removeClass("active"), $(this).parent().addClass("active"), $("#grid-3 .quiz-buttons__button_next").removeAttr("disabled")), jQuery.showGrid4()
            }), $("#grid-4 input").change(function() {
                $(this).prop("checked") && ($("#grid-4 .answer-variants__textVariant label").removeClass("active"), $(this).parent().addClass("active"), $("#grid-4 .quiz-buttons__button_next").removeAttr("disabled")), jQuery.showGrid5()
            }), $("#grid-5 input").change(function() {
                $(this).prop("checked") && ($("#grid-5 .answer-variants__textVariant label").removeClass("active"), $(this).parent().addClass("active"), $("#grid-5 .quiz-buttons__button_next").removeAttr("disabled")), jQuery.showGrid6()
            }), $("#grid-1 .quiz-buttons__button_next").click(function() {
                return jQuery.showGrid2(), !1
            }), $("#grid-2 .quiz-buttons__button_next").click(function() {
                return jQuery.showGrid3(), !1
            }), $("#grid-3 .quiz-buttons__button_next").click(function() {
                return jQuery.showGrid4(), !1
            }), $("#grid-4 .quiz-buttons__button_next").click(function() {
                return jQuery.showGrid5(), !1
            }), $("#grid-5 .quiz-buttons__button_next").click(function() {
                return jQuery.showGrid6(), !1
            }), $("#grid-2 .quiz-buttons__button_prev").click(function() {
                return jQuery.showGrid1(), !1
            }), $("#grid-3 .quiz-buttons__button_prev").click(function() {
                return jQuery.showGrid2(), !1
            }), $("#grid-4 .quiz-buttons__button_prev").click(function() {
                return jQuery.showGrid3(), !1
            }), $("#grid-5 .quiz-buttons__button_prev").click(function() {
                return jQuery.showGrid4(), !1
            }), $("#grid-6 .quiz-buttons__button_prev").click(function() {
                return jQuery.showGrid5(), !1
            })
        })
    }, {}]
}, {}, [1]);

