//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PetCenterDL.Persistencia
{
    using System;
    
    public partial class sp_ObtenerClientes_Result
    {
        public int codigo_cliente { get; set; }
        public int codigo_persona { get; set; }
        public string emailCliente { get; set; }
        public Nullable<bool> autorizaUsoDatos { get; set; }
        public int tipo_documento { get; set; }
        public string descrDocumento { get; set; }
        public string numeroDocumento { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string nombres { get; set; }
        public string direccion { get; set; }
        public string telefono { get; set; }
    }
}
