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
    using System.Collections.Generic;
    
    public partial class GPA_Declaracion_Jurada_Domicilio
    {
        public int numero_declaracion_jurada { get; set; }
        public Nullable<int> numero_solicitud { get; set; }
        public Nullable<System.DateTime> fechaDeclaracion { get; set; }
        public string descCuerpo { get; set; }
    
        public virtual GPA_Solicitud GPA_Solicitud { get; set; }
    }
}