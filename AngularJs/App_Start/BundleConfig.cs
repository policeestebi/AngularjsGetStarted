using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace AngularJs.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/app.js",
                        "~/Scripts/services/github.js",
                        "~/Scripts/controllers/MainController.js"
                        ));

            

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.9.1.js"
                ));;

            bundles.Add(new ScriptBundle("~/bundles/bootstrapjs").Include(
                        "~/Scripts/bootstrap.js"
                        ));


            bundles.Add(new StyleBundle("~/Content/bootstrap-theme").Include(
                        "~/Content/bootswatch-united.css"
                ));


            BundleTable.EnableOptimizations = true;
        }

    }
}