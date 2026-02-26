import { Building2, MapPin, Users } from 'lucide-react';
import { Post } from '../components/Post';
import postsData from '../../data/posts.json';
import commentsData from '../../data/comments.json';

export function CompanyProfile() {
  const postsWithComments = postsData.map(post => {
    const postComments = commentsData.find(c => c.postId === post.id);
    return {
      ...post,
      comentarios: postComments?.comentarios || []
    };
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Card da Empresa */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-t-lg relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjAyNTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="MaxNet"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          {/* Informações da Empresa */}
          <div className="px-6 pb-6">
            <div className="flex items-end -mt-16 mb-4">
              <div className="w-32 h-32 bg-blue-600 rounded-lg border-4 border-white flex items-center justify-center">
                <span className="text-white font-bold text-5xl">M</span>
              </div>
            </div>
            
            <div>
              <h1 className="text-2xl font-bold">MaxNet</h1>
              <p className="text-gray-700 mt-1">Soluções em Tecnologia e Conectividade</p>
              
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Tecnologia da Informação
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  São Paulo, SP
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  500+ funcionários
                </span>
              </div>
              
              <p className="mt-4 text-gray-800">
                A MaxNet é líder em soluções de conectividade e infraestrutura de rede, 
                oferecendo serviços de alta qualidade para empresas de todos os portes. 
                Inovação e excelência são nossos pilares.
              </p>
            </div>
          </div>
        </div>

        {/* Posts dos Funcionários */}
        <div>
          <h2 className="text-xl font-bold mb-4 px-1">Publicações</h2>
          {postsWithComments.map((post) => (
            <Post 
              key={post.id}
              id={post.id}
              employeeId={post.employeeId}
              nome={post.nome}
              cargo={post.cargo}
              foto={post.foto}
              post={post.post}
              likes={post.likes}
              compartilhamentos={post.compartilhamentos}
              comentarios={post.comentarios}
            />
          ))}
        </div>
      </div>
    </div>
  );
}