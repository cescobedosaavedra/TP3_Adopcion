$(function () {
    var tableAC = null;
});

$(document).ready(function () {

    recargar();

    //Modals
    $('.modal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });

    $(document).on('show.bs.modal', '.modal', function (event) {

        if ($('.modal-backdrop.fade.in').length > 0) {
            var zIndexUltimaSombra = parseInt($('.modal-backdrop.fade.in').last().css('z-index'));
            $(this).css('z-index', zIndexUltimaSombra + 11);
            setTimeout(function () {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndexUltimaSombra + 10).addClass('modal-stack');
            }, 0);
        }
        else {
            $(this).css('z-index', 1050);
            setTimeout(function () {
                $('.modal-backdrop').not('.modal-stack').css('z-index', 1049).addClass('modal-stack');
            }, 0);
        }

    }).on('hidden.bs.modal', '.modal', function (event) {

        if ($('.modal-backdrop.fade.in').length > 0) {
            setTimeout(function () {
                $('body').addClass('modal-open');
            }, 0);
        }
    });


    tablePA = $('#gridProgramaAccion').dataTable({
        "bProcessing": true
                    , "aaData": new Array()  //dtData
                    , "iDisplayLength": 6
                  , "aoColumns": [
                  /*Codigo*/{ "bSortable": true }
                  /*Programa*/, { "bSortable": true }
                  /*Estrategia*/, { "bSortable": false }
                  /*Accion*/, { "bSortable": false }
                  ]
                  , "oLanguage": {
                      "sSearch": "Búsqueda: ",
                      "sProcessing": "Procesando...",
                      "sLengthMenu": "Mostrar _MENU_ registros",
                      "sZeroRecords": "No hay registros que coincidan",
                      "sEmptyTable": "No hay datos disponibles",
                      "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                      "sInfoFiltered": "(filtro de _MAX_ total registros)",
                      "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
                      "oPaginate": {
                          "sFirst": "Primero",
                          "sPrevious": "Anterior",
                          "sNext": "Siguiente",
                          "sLast": "&Uacute;ltimo"
                      },
                      "fnInfoCallback": null
                  }
                , "bFilter": false
                , "bInfo": false
                , "bLengthChange": false
                , "scrollY": "400px"
                , "scrollX": false
                , "scrollCollapse": true

    });

    tableRS = $('#gridReqSol').dataTable({
        "bProcessing": true
                    , "aaData": new Array()  //dtData
                    , "iDisplayLength": 6
                  , "aoColumns": [
                  /*Codigo*/{ "bSortable": false }
                  /*Programa*/, { "bSortable": false }
                  /*Estrategia*/, { "bSortable": false }
                  /*Estado*/, { "bSortable": true }
                  /*Origen*/, { "bSortable": true }
                   /*Accion*/, { "bSortable": false }
                  ]
                  , "oLanguage": {
                      "sSearch": "Búsqueda: ",
                      "sProcessing": "Procesando...",
                      "sLengthMenu": "Mostrar _MENU_ registros",
                      "sZeroRecords": "No hay registros que coincidan",
                      "sEmptyTable": "No hay datos disponibles",
                      "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                      "sInfoFiltered": "(filtro de _MAX_ total registros)",
                      "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
                      "oPaginate": {
                          "sFirst": "Primero",
                          "sPrevious": "Anterior",
                          "sNext": "Siguiente",
                          "sLast": "&Uacute;ltimo"
                      },
                      "fnInfoCallback": null
                  }
                , "bFilter": false
                , "bInfo": false
                , "bLengthChange": false
                , "scrollY": "400px"
                , "scrollX": false
                , "scrollCollapse": true

    });

    tableMES = $('#gridEspecies').dataTable({
        "bProcessing": true
                    , "aaData": new Array()  //dtData
                    , "iDisplayLength": 4
                  , "aoColumns": [
                  /*Codigo*/{ "bSortable": true }
                  /*Descripcion*/, { "bSortable": true }

                  ]
                  , "oLanguage": {
                      "sSearch": "Búsqueda: ",
                      "sProcessing": "Procesando...",
                      "sLengthMenu": "Mostrar _MENU_ registros",
                      "sZeroRecords": "No hay registros que coincidan",
                      "sEmptyTable": "No hay datos disponibles",
                      "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                      "sInfoFiltered": "(filtro de _MAX_ total registros)",
                      "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
                      "oPaginate": {
                          "sFirst": "Primero",
                          "sPrevious": "Anterior",
                          "sNext": "Siguiente",
                          "sLast": "&Uacute;ltimo"
                      },
                      "fnInfoCallback": null
                  }
                , "bFilter": false
                , "bInfo": false
                , "bLengthChange": false
                , "scrollY": "400px"
                , "scrollX": false
                , "scrollCollapse": true
    });

    getListaProgramaAccion();
    getListaRequerimientoMarketing();
    getListaEspecies();


    $('#gridProgramaAccion tbody').on('click', 'tr', function () {
        var codprograma = $("td:eq(0)", this).text();
        $('#hfCodPrograma').val(codprograma);

    });

    $('#gridEspecies tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });


    $('#gridEspecies tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            tableMES.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }

        var idEspecie = $("td:eq(0)", this).text();
        var descrip = $("td:eq(1)", this).text();
      
        $('#hfCodEspecie').val(idEspecie);
        $('#hfDescripEspecie').val(descrip);

    });


});

//Grillas
function getListaProgramaAccion() {
    $.ajax({
        async: true,
        type: "POST",
        //data: "{'numcontrato':'sad'}",
        url: "../wsPetCenter.asmx/getListaProgramaAccion",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (null != tablePA) {
                tablePA.fnClearTable();
                var resultado = $.parseJSON(result.d)
                var dtData = [];
                $.each(resultado, function (k, v) {
                    dtData.push([
                            v.codigoPrograma
                           , v.descripcionPrograma
                           , v.descripcionEstrategia
                           , "<a href='#' onclick='fEjecutarPrograma(" + v.codigoPrograma + ");' data-toggle='modal' data-target='#modalPrograma'>Solicitar</a>"
                    ]);
                });
                if (dtData.length > 0)
                    tablePA.fnAddData(dtData);
            }
        }
    }); //end ajax

}


function getListaRequerimientoMarketing() {
    $.ajax({
        async: true,
        type: "POST",
        //data: "{'numcontrato':'" + numcontrato + "','codproy':'" + codproy + "'}",
        url: "../wsPetCenter.asmx/getListaRequerimientoMarketing",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (null != tableRS) {
                tableRS.fnClearTable();
                var resultado = $.parseJSON(result.d)
                var dtData = [];
                $.each(resultado, function (k, v) {
                    dtData.push([
                            v.codigoRequerimiento
                           , v.descripcionPrograma
                           , v.estrategia
                           , v.estado
                           , v.origen
                           , "<a href='#' onclick='fEjecutarRequerimiento(" + v.codigoRequerimiento + ");' data-toggle='modal' data-target='#modalPrograma'>Modificar</a>"
                    ]);
                });
                if (dtData.length > 0)
                    tableRS.fnAddData(dtData);
            }
        }
    }); //end ajax

}


function getListaActividadesRequerimientos() {

    var codreq = $('#hfCodReq').val();
    $.ajax({
        async: true,
        type: "POST",
        data: "{'codrequerimiento':'" + codreq + "'}",
        url: "../wsPetCenter.asmx/getListaActividadesRequerimiento",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (null != tableAC) {
                tableAC.fnClearTable();
                var resultado = $.parseJSON(result.d)
                var dtData = [];
                $.each(resultado, function (k, v) {
                    dtData.push([
                            v.codigoActividad
                           , v.actividad
                           , v.areaResponsable
                           , v.tiempo
                           , v.codigoRequerimiento
                           , "<a href='#' id='aQuitarActProg'>Quitar</a>"
                    ]);
                });
                if (dtData.length > 0)
                    tableAC.fnAddData(dtData);
            }
        }
    }); //end ajax

}

function getListaMedioPublicitario() {

    var codreq = $('#hfCodReq').val();
    $.ajax({
        async: true,
        type: "POST",
        data: "{'codrequerimiento':'" + codreq + "'}",
        url: "../wsPetCenter.asmx/getListaPublicidadRequerimiento",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (null != tableMP) {
                tableMP.fnClearTable();
                var resultado = $.parseJSON(result.d)
                var dtData = [];
                $.each(resultado, function (k, v) {
                    dtData.push([
                            v.codigoMedio
                           , v.Medio_Publicitario
                           , v.cantidad
                           , v.comentario
                           , v.codigoRequerimiento
                           , "<a href='#' id='aQuitarActProg'>Quitar</a>"
                    ]);
                });
                if (dtData.length > 0)
                    tableMP.fnAddData(dtData);
            }
        }
    }); //end ajax

}

function getListaEspeciesRequerimiento() {

    var codreq = $('#hfCodReq').val();
    $.ajax({
        async: true,
        type: "POST",
        data: "{'codrequerimiento':'" + codreq + "'}",
        url: "../wsPetCenter.asmx/getListaEspecieRequerimiento",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (null != tableES) {
                tableES.fnClearTable();
                var resultado = $.parseJSON(result.d)
                var dtData = [];
                $.each(resultado, function (k, v) {
                    dtData.push([
                            v.codigoEspecie
                           , v.descripcionEspecie
                           , v.codigoRequerimiento
                           , "<a href='#' id='aQuitarActProg'>Quitar</a>"
                    ]);
                });
                if (dtData.length > 0)
                    tableES.fnAddData(dtData);
            }
        }
    }); //end ajax

}

function getListaEspecies() {
    $.ajax({
        async: true,
        type: "POST",
        //data: "{'codrequerimiento':'" + codreq + "'}",
        url: "../wsPetCenter.asmx/getListaEspecie",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (null != tableMES) {
                tableMES.fnClearTable();
                var resultado = $.parseJSON(result.d)
                var dtData = [];
                $.each(resultado, function (k, v) {
                    dtData.push([
                            v.codigoEspecie
                           , v.descripcionEspecie
                    ]);
                });
                if (dtData.length > 0)
                    tableMES.fnAddData(dtData);
            }
        }
    }); //end ajax

}


function fEjecutarPrograma(codprograma) {

    $('#hfCodPrograma').val(codprograma);
    $("#btnProgramaAccion").click();

}

function fEjecutarRequerimiento(codreq) {
    $('#hfCodReq').val(codreq);
    $("#btnModificarReq").click();

}

function recargar() {
    //Generar Requerimiento
    $("#btnProgramaAccion").css("display", "none");
    $("#btnModificarReq").css("display", "none");

    $("#btnGuardarPrograma").click(function () {
        if (ValidarCamposRequerimiento())
            return true;
        else
            return false;
    });

    //Atender Cotizacion
    $("#btnEnviarProv").css("display", "none");

}

function disabledControl(indica) {
    if (indica == 0) {
        $("#txtObjetivo").removeAttr("disabled");
        $("#txtEstrategia").removeAttr("disabled");
        $("#txtPresupuesto").removeAttr("disabled");

    }
    else {
        $("#txtObjetivo").attr("disabled", "disabled");
        $("#txtEstrategia").attr("disabled", "disabled");
        $("#txtPresupuesto").attr("disabled", "disabled");

    }
}


function ValidarCamposRequerimiento() {
    var result = true;
    var tagsVacios = "";

    if ($("#txtDescripcion").val() == "")
        tagsVacios = "#txtDescripcion,";
    if ($("#txtPresuAjustado").val() == "")
        tagsVacios = tagsVacios + "#txtPresuAjustado,";
    if (tagsVacios != "") {
        tagsVacios = tagsVacios.substring(0, tagsVacios.length - 1);
        $("#msnError").css("display", "block");
        $(".req").remove();
        //$(tagsVacios).parent().after("<td style='color:red;' class='req'>*</td>");

        $(tagsVacios).css({
            "border": "1px solid #DC2606"
        });

        result = false;
    }

    return result;
}




