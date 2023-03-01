import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://uhkwpzhgksexloavtpjc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa3dwemhna3NleGxvYXZ0cGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5NDI4MjgsImV4cCI6MTk5MjUxODgyOH0.OvtmgQyZO1UK9tIhU4LFiRBPXhGtdXKmPFcHyMcAoQk'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  // object destructuring statement
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`;
    // NOTE: not single quotes, those are backticks
  }
}

getBooks();


