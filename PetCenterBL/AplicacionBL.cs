using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PetCenterDL.Persistencia;
using PetCenterDL.Datos;
namespace PetCenterBL
{
    public class AplicacionBL
    {
        AplicacionDL dal = new AplicacionDL();

        public static AplicacionBL Instance { get { return Singleton<AplicacionBL>.Instance; } }

        public IEnumerable<Aplicacion> ObtenerMenu() {
            return dal.ObtenerMenu();
        }
    }
}
