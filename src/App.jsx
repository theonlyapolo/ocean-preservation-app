import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Progress } from './components/ui/progress';
import { Waves, Fish, Users, BookOpen, Lightbulb, ExternalLink, Heart, Recycle, TreePine, Award, Menu } from 'lucide-react';
import './App.css';

// Importar as imagens
import appCover from './assets/app_cover.png';
import illustration1 from './assets/illustration_1.jpeg';
import illustration2 from './assets/illustration_2.jpg';
import illustration3 from './assets/illustration_3.png';

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const quizQuestions = [
    {
      question: "Qual porcentagem do oxigênio que respiramos vem dos oceanos?",
      options: ["30%", "50%", "70%", "90%"],
      correct: 1,
      explanation: "Os oceanos produzem 50% do oxigênio que respiramos!"
    },
    {
      question: "Quantos por cento dos oceanos foram explorados pelos humanos?",
      options: ["26%", "50%", "74%", "90%"],
      correct: 0,
      explanation: "Apenas 26% do fundo oceânico foi explorado. Conhecemos melhor a superfície da Lua!"
    },
    {
      question: "Quantas toneladas de plástico o Brasil despeja nos oceanos por ano?",
      options: ["100 mil", "200 mil", "325 mil", "500 mil"],
      correct: 2,
      explanation: "O Brasil despeja cerca de 325 mil toneladas de plástico nos oceanos anualmente."
    }
  ];

  const handleQuizAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuiz].correct) {
      setQuizScore(quizScore + 1);
    }
    
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setQuizScore(0);
    setShowQuizResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Waves className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Política Azul</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-200 transition-colors">Início</a>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden flex flex-col space-y-2 mt-4">
              <a href="#home" className="block py-2 px-4 hover:bg-primary/90 rounded" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Preservando Nossos Oceanos para o Futuro
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Descubra como você pode fazer a diferença na preservação dos oceanos. 
                Aprenda sobre políticas públicas, ações individuais e coletivas que protegem 
                nosso planeta azul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" />
                  <a href="https://pp.nexojornal.com.br/opiniao/2022/06/27/um-oceano-alem-do-horizonte" target="_blank" rel="noopener noreferrer">Começar a Aprender</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="https://tamar.org.br/interna.php?cod=467" target="_blank" rel="noopener noreferrer">
                    <Users className="mr-2 h-5 w-5" />
                    Participar de Campanhas
                  </a>
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  <a href="/jogo" className="flex items-center">
                    🎮 Jogue Agora
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <img 
                src={appCover} 
                alt="Preservação Oceânica" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="policies" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 h-auto">
            <TabsTrigger value="policies" className="text-xs sm:text-sm p-2 sm:p-3">
              Políticas Públicas
            </TabsTrigger>
            <TabsTrigger value="individual" className="text-xs sm:text-sm p-2 sm:p-3">
              Ações Individuais
            </TabsTrigger>
            <TabsTrigger value="collective" className="text-xs sm:text-sm p-2 sm:p-3">
              Ações Coletivas
            </TabsTrigger>
            <TabsTrigger value="facts" className="text-xs sm:text-sm p-2 sm:p-3">
              Sabia Disso?
            </TabsTrigger>
            <TabsTrigger value="authors" className="text-xs sm:text-sm p-2 sm:p-3">
              Autores
            </TabsTrigger>
            <TabsTrigger value="city" className="text-xs sm:text-sm p-2 sm:p-3">
              História da Cidade
            </TabsTrigger>
            <TabsTrigger value="laws" className="text-xs sm:text-sm p-2 sm:p-3">
              Leis Ambientais
            </TabsTrigger>
            <TabsTrigger value="baleias" className="text-xs sm:text-sm p-2 sm:p-3">
              Baleias em Guriri
            </TabsTrigger>
            <TabsTrigger value="restinga" className="text-xs sm:text-sm p-2 sm:p-3">
              Restinga e Nativas
            </TabsTrigger>
            <TabsTrigger value="links" className="text-xs sm:text-sm p-2 sm:p-3">
              Referências
            </TabsTrigger>
          </TabsList>

          {/* --- Conteúdo Original --- */}
          {/* Políticas Públicas */}
          {/* (o conteúdo das outras abas originais permanece o mesmo aqui) */}
          {/* ... (mantenha o código que você já tinha) ... */}

          {/* NOVAS ABAS */}
          <TabsContent value="authors" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Autores do Projeto</CardTitle>
                <CardDescription>Conheça a equipe por trás do projeto Política Azul</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Autor 1 – Pesquisa sobre políticas públicas</li>
                  <li>Autor 2 – Pesquisa sobre biodiversidade</li>
                  <li>Autor 3 – Coleta de dados históricos</li>
                  <li>Autor 4 – Análise ambiental</li>
                  <li>Autor 5 – Produção de conteúdo textual</li>
                  <li>Autor 6 – Curadoria de imagens</li>
                  <li><strong>Coautor:</strong> Desenvolvimento do WebApp</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="city" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>História da Cidade</CardTitle>
                <CardDescription>Resumo histórico e principais leis locais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  (Coloque aqui o resumo histórico da cidade e as leis relevantes.)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="laws" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Leis de Proteção Ambiental</CardTitle>
                <CardDescription>Principais normas e políticas ambientais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  (Liste aqui as leis ambientais importantes, como a Lei do Mar, Lei do SNUC etc.)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="baleias" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Baleias em Guriri</CardTitle>
                <CardDescription>Ocorrências e impactos ambientais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  (Informações sobre baleias encontradas mortas em Guriri e as medidas de preservação.)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="restinga" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Restinga e Espécies Nativas</CardTitle>
                <CardDescription>Flora típica da região como o coquinho</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  (Informações sobre a restinga, o coquinho e outras espécies nativas.)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="links" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Links de Referência</CardTitle>
                <CardDescription>Fontes e materiais consultados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-blue-600">
                  <li><a href="https://pp.nexojornal.com.br/" target="_blank" rel="noopener noreferrer">Nexo Jornal</a></li>
                  <li><a href="https://tamar.org.br/" target="_blank" rel="noopener noreferrer">Projeto Tamar</a></li>
                  <li><a href="https://brasil.oceana.org/" target="_blank" rel="noopener noreferrer">Oceana Brasil</a></li>
                  {/* Adicione mais links conforme necessário */}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Política Azul. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Feito com paixão pela preservação oceânica.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
