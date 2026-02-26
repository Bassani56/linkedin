import { useState } from 'react';
import { Link } from 'react-router';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

interface Comment {
  id: number;
  employeeId: string;
  nome: string;
  cargo: string;
  comentario: string;
  foto: string;
}

interface PostProps {
  id: number;
  employeeId: string;
  nome: string;
  cargo: string;
  foto: string;
  post: string;
  likes: number;
  compartilhamentos: number;
  comentarios: Comment[];
}

export function Post({ id, employeeId, nome, cargo, foto, post, likes, compartilhamentos, comentarios }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      {/* Header do Post */}
      <div className="flex items-center gap-3 mb-3">
        <Link to={`/profile/${employeeId}`}>
          <img 
            src={foto} 
            alt={nome}
            className="w-12 h-12 rounded-full object-cover hover:opacity-80 transition-opacity"
          />
        </Link>
        <div>
          <Link to={`/profile/${employeeId}`} className="hover:underline">
            <h3 className="font-semibold">{nome}</h3>
          </Link>
          <p className="text-sm text-gray-600">{cargo}</p>
        </div>
      </div>

      {/* Conteúdo do Post */}
      <p className="mb-4 text-gray-800">{post}</p>

      {/* Contador de Likes */}
      {likeCount > 0 && (
        <div className="text-sm text-gray-600 mb-2">
          {likeCount} {likeCount === 1 ? 'curtida' : 'curtidas'}
        </div>
      )}

      <Separator className="my-3" />

      {/* Botões de Ação */}
      <div className="flex gap-2">
        <Button 
          variant="ghost" 
          className={`flex-1 gap-2 ${liked ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={handleLike}
        >
          <ThumbsUp className="w-5 h-5" />
          Curtir
        </Button>
        <Button 
          variant="ghost" 
          className="flex-1 gap-2 text-gray-600"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="w-5 h-5" />
          Comentar
        </Button>
        <Button 
          variant="ghost" 
          className="flex-1 gap-2 text-gray-600"
        >
          <Share2 className="w-5 h-5" />
          Compartilhar
        </Button>
      </div>

      {/* Seção de Comentários */}
      {showComments && comentarios.length > 0 && (
        <>
          <Separator className="my-3" />
          <div className="space-y-3">
            {comentarios.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <Link to={`/profile/${comment.employeeId}`}>
                  <img 
                    src={comment.foto} 
                    alt={comment.nome}
                    className="w-8 h-8 rounded-full object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>
                <div className="flex-1 bg-gray-100 rounded-lg p-3">
                  <Link to={`/profile/${comment.employeeId}`} className="hover:underline">
                    <h4 className="font-semibold text-sm">{comment.nome}</h4>
                  </Link>
                  <p className="text-xs text-gray-600 mb-1">{comment.cargo}</p>
                  <p className="text-sm text-gray-800">{comment.comentario}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}