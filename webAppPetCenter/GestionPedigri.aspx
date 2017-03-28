<%@ Page Title="" Language="C#" MasterPageFile="~/Template/Main.Master" AutoEventWireup="true" CodeBehind="GestionPedigri.aspx.cs" Inherits="webAppPetCenter.GestionPedigri" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div class="panel-default">
        <h4>Registro de Solicitud de Pedigri</h4>
    </div>
    <!--Datos de Cliente-->
    <div class="form-group">
        <label class="col-sm-2 control-label">Datos de Cliente</label>
        <div class="col-sm-10">
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#divModalCliente" id="btnBuscarCliente">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Buscar Cliente
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-3">
            <input type="text" id="txtNombreCliente" class="form-control" disabled value="" />
        </div>
        <label class="col-sm-2 control-label">Apellido Paterno</label>
        <div class="col-sm-3">
            <input type="text" id="txtApellidoPaternoCliente" class="form-control" disabled value="" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Apellido Materno</label>
        <div class="col-sm-3">
            <input type="text" id="txtApellidoMaternoCliente" class="form-control" disabled value="" />
        </div>
        <label class="col-sm-2 control-label">Apellido Paterno</label>
        <div class="col-sm-3">
            <input type="text" id="txtDIreccionCliente" class="form-control" disabled value="" />
        </div>
    </div>

    <!--Datos de Mascota Padre-->
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Datos del Padre de Mascota</label>
        <div class="col-sm-10">
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#divModalMascota" id="btnBuscarPadreMascota">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Buscar Padre Mascota
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-3">
            <input type="text" id="txtNombreMascotaPadre" class="form-control" disabled value="" />
        </div>
        <label class="col-sm-2 control-label">Raza</label>
        <div class="col-sm-3">
            <input type="text" id="txtRazaMascotaPadre" class="form-control" disabled value="" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Edad</label>
        <div class="col-sm-1">
            <input type="text" id="txtEdadMascotaPadre" class="form-control" disabled value="" />
        </div>
    </div>
    <!--Datos de Mascota Madre-->
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Datos de la Madre de Mascota</label>
        <div class="col-sm-10">
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#divModalMascota" id="btnBuscarMadreMascota">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Buscar Madre Mascota
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-3">
            <input type="text" id="txtNombreMascotaMadre" class="form-control" disabled value="" />
        </div>
        <label class="col-sm-2 control-label">Raza</label>
        <div class="col-sm-3">
            <input type="text" id="txtRazaMascotaMadre" class="form-control" disabled value="" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Edad</label>
        <div class="col-sm-1">
            <input type="text" id="txtEdadMascotaMadre" class="form-control" disabled value="" />
        </div>
    </div>
    <!--Datos de Camada-->
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Datos de la Camada</label>
        <div class="col-sm-10">
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#divModalMascota" id="btnBuscarCamada">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Buscar Camada 
            </button>
        </div>
    </div>
    <!--Modal Buscar Cliente-->
    <div id="divModalCliente" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="gridSystemModalLabel">Buscar Cliente</h4>
                </div>
                <div class="modal-body">
                    <div id="bodyBuscarCliente">
                        <div class="form-group">
                            <div class="col-md-2">
                                <label class="control-label">Tipo Documento </label>
                            </div>
                            <div class="col-md-2">
                                <asp:DropDownList ID="ddlTipoDocumento" runat="server" CssClass="form-control" ClientIDMode="Static"></asp:DropDownList>
                            </div>
                            <div class="col-md-2">
                                <label class="control-label">Nro. Documento </label>
                            </div>
                            <div class="col-md-2">
                                <input type="text" id="txtNroDocumento" class="form-control" value="" />
                            </div>
                            <div class="col-md-1">
                                <label class="control-label">Nombres </label>
                            </div>
                            <div class="col-md-2">
                                <input type="text" id="txtNombreClientePP" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="col-md-2">
                                <label class="control-label">Apellido Pat. </label>
                            </div>
                            <div class="col-md-2">
                                <input type="text" id="txtApellidoPaternoPP" class="form-control" value="" />
                            </div>
                            <div class="col-md-2">
                                <label class="control-label">Apellido Mat. </label>
                            </div>
                            <div class="col-md-2">
                                <input type="text" id="txtApellidoMaternoPP" class="form-control" value="" />
                            </div>
                            <div class="col-md-2">

                                <button type="button" class="btn btn-primary btn-sm" id="btnBuscarClientePP">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Buscar Cliente
                                </button>
                            </div>
                        </div>
                        <div>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Tipo Documento</th>
                                        <th>Nro. Documento</th>
                                        <th>Direcci&oacute;n</th>
                                        <th>Tel&eacute;fono</th>
                                        <th>Acci&oacute;n</th>
                                    </tr>
                                </thead>
                                <tbody id="tbodyCliente">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="bodyRegistarCliente">
                        <div class="form-group">
                            <div class="col-md-2">
                                <label class="control-label">Tipo Documento </label>
                            </div>
                            <div class="col-md-2">
                                <asp:DropDownList ID="ddlTipoDocumentoRC" runat="server" CssClass="form-control" ClientIDMode="Static"></asp:DropDownList>
                            </div>
                            <div class="col-md-2">
                                <label class="control-label">Nro. Documento </label>
                            </div>
                            <div class="col-md-2">
                                <input type="text" id="txtNroDocumentoRC" class="form-control" value="" />
                            </div>
                            <div class="col-md-1">
                                <label class="control-label">Nombres </label>
                            </div>
                            <div class="col-md-2">
                                <input type="text" id="txtNombreClienteRC" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="col-md-2">
                                <label class="control-label">Apellido Paterno </label>
                            </div>
                            <div class="col-md-3">
                                <input type="text" id="txtApellidoPaternoRC" class="form-control" value="" />
                            </div>
                            <div class="col-md-2">
                                <label class="control-label">Apellido Materno </label>
                            </div>
                            <div class="col-md-3">
                                <input type="text" id="txtApellidoMaternoRC" class="form-control" value="" />
                            </div>

                        </div>
                        <div class="form-group">

                            <div class="col-md-2">
                                <label class="control-label">Direcci&oacute;n </label>
                            </div>
                            <div class="col-md-3">
                                <input type="text" id="txtDireccionRC" class="form-control" value="" />
                            </div>
                            <div class="col-md-2">
                                <label class="control-label">Tel&eacute;fono</label>
                            </div>
                            <div class="col-md-3">
                                <input type="text" id="txtTelefonoRC" class="form-control" value="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a id="btnRegistrarCliente" class="btn btn-success btn-sm">Registar Cliente
                    </a>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

    <!--Modal Buscar Padre o Madre-->
    <div id="divModalMascota" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Buscar Mascota</h4>
                </div>
                <div class="modal-body">
                    <div id="bodyMascota">
                        <div class="form-group">
                            <div class="col-md-1">
                                <label class="control-label">Nombre </label>
                            </div>
                            <div class="col-md-3">
                                <input type="text" id="txtNombreMascota" class="form-control" value="" />
                            </div>
                            <div class="col-md-1">
                                <label class="control-label">Raza</label>
                            </div>
                            <div class="col-md-3">
                                <asp:DropDownList ID="ddlRaza" CssClass="form-control" runat="server"></asp:DropDownList>
                            </div>
                            <div class="col-md-4">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-1">
                                <label class="control-label">G&eacute;nero</label>
                            </div>
                            <div class="col-md-2">
                                <asp:DropDownList ID="ddlGenero" CssClass="form-control" runat="server"></asp:DropDownList>
                            </div>
                            <div class="col-md-2">
                                <button type="button" class="btn btn-primary btn-sm" id="btnBuscarMascotaPP">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Buscar Mascota
                                </button>
                            </div>
                        </div>
                        <div>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>G&eacute;nero</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Edad</th>
                                        <th>Tamaño</th>
                                        <th>Raza</th>
                                        <th>Acci&oacute;n</th>
                                    </tr>
                                </thead>
                                <tbody id="tbodyMascota">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="bodyRegistrarMascota">
                        <div class="form-group">
                            <label class="col-sm-1 control-label">Nombre </label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-1 control-label">Especie </label>
                            <div class="col-sm-3">
                                <select id="ddlEspecie" class="form-control"></select>
                            </div>
                            <label class="col-sm-1 control-label">Raza </label>
                            <div class="col-sm-3">
                                <select id="ddlRazaRC" class="form-control"></select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-1 control-label">G&eacute;nero </label>
                            <div class="col-sm-5">
                                <div class="radio">
                                <label><input type="radio" name="optionsRadios" id="rbHembra" value="H" />Hembra
                                    
                                </label>
                                    </div>
                              
                             <div class="radio">
                                <label><input type="radio" name="optionsRadios" id="rb" value="M" />Macho
                                    
                                </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-1 control-label">Fecha Nac. </label>
                            <div class="col-sm-3">
                                <input />
                            </div>
                            <label class="col-sm-1 control-label">Tamaño </label>
                            <div class="col-sm-3">
                                <select id="ddlTamañoRC" class="form-control"></select>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <a id="btnRegistrarMascota" class="btn btn-success btn-sm">Registar Mascota
                        </a>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentScriptHolder" runat="server">
    <script src="Content/script/gestionPedigri.js"></script>
</asp:Content>
