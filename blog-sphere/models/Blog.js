import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  Id: {
    type: Number, 
    required: true,
    unique: true 
  },
  Titulo: {
    type: String,
    required: true
  },
  Descricao: {
    type: String,
    required: true
  },
  dataPublicacao: {
    type: Date,
    required: true
  },
  Comentarios: {
    type: String, 
    default: ''
  },
  Avaliacao: {
    type: Number,
  }
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
