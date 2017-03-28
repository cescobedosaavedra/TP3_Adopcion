using PetCenterDL.Persistencia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCenterDL.Datos
{
    public class AplicacionDL
    {
        public IEnumerable<Aplicacion> ObtenerMenu()
        {

            IEnumerable<Aplicacion> a;

            using (PETCENTER_201701Entities con = new PETCENTER_201701Entities())
            {
                a = (from x in con.Aplicacion
                     where x.AplicacionIdPadre == 0
                     select x).ToList();
            }
            return a;
        }
    }
}
