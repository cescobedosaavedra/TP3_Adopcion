using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using PetCenterBL;
using PetCenterDL.Persistencia;
using System.Text;

namespace webAppPetCenter.Template
{
    public partial class Main : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ListarMenu();
            }
        }

        private void ListarMenu()
        {
            AplicacionBL aplicacion = AplicacionBL.Instance;
            var x = aplicacion.ObtenerMenu();
            StringBuilder cadena = new StringBuilder();

            foreach (var item in x)
            {
                cadena.AppendFormat("<a href ='{1}' class='list-group-item'>{0}</a>", item.Nombre, item.Controlador);                 
            }
          
            MenuPrincipal.Text = cadena.ToString();
        }
    }
}