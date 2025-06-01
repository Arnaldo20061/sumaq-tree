
import { Heart, Coffee } from "lucide-react";

const FounderNote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-coffee-900 via-forest-900 to-earth-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-forest-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Coffee className="w-5 h-5 text-coffee-200" />
              <span className="text-white font-medium">Nota del fundador</span>
            </div>
          </div>

          {/* Main content */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="space-y-6 text-white/90 leading-relaxed">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                "Un día, todo cambió con una taza de café"
              </h3>

              <p className="text-lg">
                Recuerdo que fue en una feria agrícola cuando escuché a una productora decir: 
                <em className="text-coffee-200"> "Tenemos un café increíble, pero nadie nos compra porque no tenemos cómo probar que somos sostenibles".</em>
              </p>

              <p className="text-lg">
                Esa frase se me quedó grabada.
              </p>

              <p className="text-lg">
                Me puse a investigar. Hablé con ingenieros agrónomos, productores de café y expertos en certificaciones. 
                Todos coincidían en lo mismo: el problema no era la calidad, era la falta de datos confiables y visibles.
              </p>

              <p className="text-lg">
                Así nació nuestra misión: crear una herramienta tecnológica que facilitara la gestión sostenible 
                para quienes realmente están en el campo, día a día.
              </p>

              <p className="text-lg">
                Hoy, con <span className="text-forest-200 font-semibold">Sumaq Tree</span>, ayudamos a cooperativas y agroexportadoras a tomar decisiones 
                basadas en datos reales. Les damos lo que necesitan para mejorar su producción, ahorrar recursos 
                y abrirse paso a mercados internacionales que exigen sostenibilidad.
              </p>

              <p className="text-lg font-medium text-white">
                No se trata solo de sensores. Se trata de empoderar a quienes alimentan al mundo.
              </p>

              <p className="text-lg font-semibold text-forest-200">
                Esto recién empieza.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    Con mucho cariño,
                  </p>
                  <p className="text-2xl font-bold text-forest-200 mb-2">
                    Sumaq Tree
                  </p>
                  <div className="flex items-center gap-2 text-coffee-200">
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-sm">
                      Tecnología hecha para cuidar la tierra y a quienes la trabajan
                    </span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="hidden lg:block">
                  <div className="w-24 h-24 bg-gradient-to-br from-forest-400 to-coffee-400 rounded-full flex items-center justify-center opacity-20">
                    <Coffee className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
