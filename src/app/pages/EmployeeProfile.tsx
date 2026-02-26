import { useParams, Link } from 'react-router';
import { Briefcase, MapPin } from 'lucide-react';
import employeesData from '../../data/employees.json';
import userPostsData from '../../data/user-posts.json';
import userCommentsData from '../../data/user-comments.json';
import { Post } from '../components/Post';

export function EmployeeProfile() {
  const { id } = useParams();
  const employee = employeesData.find(emp => emp.id === id);

  // Buscar posts do usuário
  const userPosts = userPostsData.find(up => up.employeeId === id);
  
  // Combinar posts com comentários
  const postsWithComments = userPosts?.posts.map(post => {
    const postComments = userCommentsData.find(c => c.postId === post.id);
    return {
      id: post.id,
      employeeId: id!,
      nome: employee?.nome || '',
      cargo: employee?.cargo || '',
      foto: employee?.foto || '',
      post: post.conteudo,
      likes: post.likes,
      compartilhamentos: post.compartilhamentos,
      comentarios: postComments?.comentarios || []
    };
  }) || [];

  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Perfil não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

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
                src={employee.foto} 
                alt={employee.nome}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold">{employee.nome}</h1>
              <p className="text-gray-700 mt-1">{employee.cargo}</p>
              
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <Link to="/company/maxnet" className="text-blue-600 hover:underline">
                    {employee.empresa}
                  </Link>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {employee.localizacao}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Experiência */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
          <h2 className="text-xl font-bold mb-4">Experiência</h2>
          
          <div className="space-y-4">
            {employee.experiencias.map((exp, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {exp.empresa.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{exp.titulo}</h3>
                  {exp.empresa === 'MaxNet' ? (
                    <Link to="/company/maxnet" className="text-gray-700 hover:text-blue-600 hover:underline">
                      {exp.empresa}
                    </Link>
                  ) : (
                    <p className="text-gray-700">{exp.empresa}</p>
                  )}
                  <p className="text-sm text-gray-600">{exp.periodo}</p>
                  <p className="text-sm text-gray-600 mt-2">{exp.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Posts */}
        {postsWithComments.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4 px-1">Atividade</h2>
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
        )}
      </div>
    </div>
  );
}