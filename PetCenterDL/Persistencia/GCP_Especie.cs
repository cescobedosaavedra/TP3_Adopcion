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
    
    public partial class GCP_Especie
    {
        public GCP_Especie()
        {
            this.GCP_Mascota = new HashSet<GCP_Mascota>();
        }
    
        public int codigo_especie { get; set; }
        public string descripcionEspecie { get; set; }
    
        public virtual ICollection<GCP_Mascota> GCP_Mascota { get; set; }
    }
}
