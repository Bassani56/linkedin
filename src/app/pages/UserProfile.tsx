import { Link } from 'react-router';
import { Briefcase, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';

export function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Card do Perfil */}
        <div className="bg-white rounded-lg border border-gray-200 mb-4">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg"></div>
          
          {/* Informações do Perfil */}
          <div className="px-6 pb-6">
            <div className="flex items-end -mt-16 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDI4MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold">Ana Paula Santos</h1>
              <p className="text-gray-700 mt-1">Desenvolvedora Sênior | Líder de Equipe</p>
              
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <Link to="/company/maxnet" className="text-blue-600 hover:underline">
                    MaxNet
                  </Link>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  São Paulo, Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Experiência */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">Experiência</h2>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Desenvolvedora Sênior</h3>
                <Link to="/company/maxnet" className="text-gray-700 hover:text-blue-600 hover:underline">
                  MaxNet
                </Link>
                <p className="text-sm text-gray-600">jan 2022 - Atual · 3 anos</p>
                <p className="text-sm text-gray-600 mt-2">
                  Liderança de equipe de desenvolvimento, arquitetura de soluções e implementação de projetos de grande escala.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-gray-700 font-bold text-lg">T</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Desenvolvedora Pleno</h3>
                <p className="text-gray-700">TechSolutions</p>
                <p className="text-sm text-gray-600">mar 2019 - dez 2021 · 2 anos 10 meses</p>
                <p className="text-sm text-gray-600 mt-2">
                  Desenvolvimento de aplicações web e mobile, integração de APIs e manutenção de sistemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
