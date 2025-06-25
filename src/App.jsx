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
              <h1 className="text-2xl font-bold">BlueAware</h1>
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
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
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
          </TabsList>

          {/* Políticas Públicas */}
          <TabsContent id="policies" value="policies" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <BookOpen className="mr-2 h-6 w-6 text-primary" />
                  Políticas Públicas de Preservação Oceânica
                </CardTitle>
                <CardDescription>
                  Conheça as principais políticas e legislações para proteção dos oceanos no Brasil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Descaso Governamental</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        O oceano é o bioma menos considerado em políticas públicas. 
                        Menos de 2% dos orçamentos nacionais são direcionados para pesquisa oceânica.
                      </p>
                      <Badge variant="destructive">Urgente</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Lei do Plástico</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        É urgente criar uma lei nacional para reduzir a produção de plásticos de uso único. 
                        O Brasil produz 7 milhões de toneladas de plástico por ano.
                      </p>
                      <Badge variant="secondary">Em Discussão</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Década da Ciência Oceânica</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Iniciativa da ONU (2021-2030) para unir esforços na reversão do declínio 
                        da saúde oceânica e garantir exploração sustentável.
                      </p>
                      <Badge>Em Andamento</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Lei do Mar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Projeto aprovado na Câmara que cria política nacional para uso sustentável 
                        do território marinho e fortalece a governança ambiental.
                      </p>
                      <Badge variant="default">Aprovado</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ações Individuais */}
          <TabsContent id="actions" value="individual" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Heart className="mr-2 h-6 w-6 text-primary" />
                  Como Você Pode Fazer a Diferença
                </CardTitle>
                <CardDescription>
                  Pequenas ações individuais que geram grande impacto na preservação oceânica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="order-2 lg:order-1">
                    <h3 className="font-semibold mb-3">Ações Práticas do Dia a Dia</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Recycle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Reduza o Plástico</p>
                          <p className="text-sm text-gray-600">Use sacolas reutilizáveis, garrafas de vidro e evite produtos descartáveis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Fish className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Consumo Consciente</p>
                          <p className="text-sm text-gray-600">Escolha frutos do mar de fontes sustentáveis e certificadas</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TreePine className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Descarte Correto</p>
                          <p className="text-sm text-gray-600">Separe o lixo corretamente e participe da coleta seletiva</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <img 
                      src={illustration1} 
                      alt="Ecossistema Marinho Saudável" 
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="font-semibold mb-4">Calculadora de Impacto Pessoal</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Uso de sacolas plásticas por semana:</label>
                        <Progress value={30} className="mt-2" />
                        <p className="text-xs text-gray-500 mt-1">Reduzindo para 2 sacolas/semana = 104 sacolas/ano economizadas</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Garrafas plásticas por semana:</label>
                        <Progress value={60} className="mt-2" />
                        <p className="text-xs text-gray-500 mt-1">Usando garrafa reutilizável = 312 garrafas/ano economizadas</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-green-800">Seu Impacto Anual:</p>
                        <p className="text-lg font-bold text-green-600">416 itens plásticos economizados!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ações Coletivas */}
          <TabsContent id="campanhas" value="collective" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Users className="mr-2 h-6 w-6 text-primary" />
                  Ações Coletivas e Campanhas
                </CardTitle>
                <CardDescription>
                  Conecte-se com organizações e participe de iniciativas de preservação oceânica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="order-2 lg:order-1">
                    <h3 className="font-semibold mb-3">Como Participar</h3>
                    <div className="space-y-3">
<Button asChild className="w-full justify-start" variant="outline">
  <a href="https://voiceoftheoceans.com/a-importancia-das-limpezas-de-praia/" target="_blank" rel="noopener noreferrer">
    <ExternalLink className="mr-2 h-4 w-4" />
    Limpezas de Praia
  </a>
</Button>
<Button asChild className="w-full justify-start" variant="outline">
  <a href="https://g1.globo.com/sc/santa-catarina/noticia/2024/05/09/recuperacao-de-manguezais-com-plantio-de-especies-nativas-em-sc-busca-frear-mudancas-climaticas.ghtml" target="_blank" rel="noopener noreferrer">
    <ExternalLink className="mr-2 h-4 w-4" />
    Plantio de Mangue
  </a>
</Button>

<Button asChild className="w-full justify-start" variant="outline">
  <a href="https://123ecos.com.br/docs/programa-oceanico-gems/" target="_blank" rel="noopener noreferrer">
    <ExternalLink className="mr-2 h-4 w-4" />
    Monitoramento Marinho
  </a>
</Button>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <img 
                      src={illustration3} 
                      alt="Ações Coletivas" 
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="font-semibold mb-4">Organizações Parceiras</h3>
                    <div className="space-y-4">
                      <Card className="p-4">
                        <h4 className="font-medium">Oceana Brasil</h4>
                        <p className="text-sm text-gray-600">Campanhas estratégicas para proteger e restaurar a abundância dos oceanos</p>
                        <Button asChild size="sm" className="mt-2">
  <a href="https://brasil.oceana.org/" target="_blank" rel="noopener noreferrer">
    Saiba Mais
  </a>
  </Button>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-medium">Sea Shepherd Brasil</h4>
                        <p className="text-sm text-gray-600">Organização internacional de conservação da vida marinha</p>
                        <Button asChild size="sm" className="mt-2">
  <a href="https://seashepherd.org.br/" target="_blank" rel="noopener noreferrer">
    Saiba Mais
  </a>
</Button>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-medium">Instituto Ecosurf</h4>
                        <p className="text-sm text-gray-600">Empodera surfistas e voluntários para proteção oceânica</p>
                                                <Button asChild size="sm" className="mt-2">
  <a href="https://ecosurf.org.br/" target="_blank" rel="noopener noreferrer">
    Saiba Mais
  </a>
  </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sabia Disso? */}
          <TabsContent value="facts" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Lightbulb className="mr-2 h-6 w-6 text-primary" />
                  Sabia Disso? Curiosidades Oceânicas
                </CardTitle>
                <CardDescription>
                  Fatos surpreendentes sobre nossos oceanos que vão te impressionar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={illustration2} 
                      alt="Poluição Oceânica" 
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="font-semibold mb-3">Conhecimentos Essenciais</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Conhecemos mais a Lua!</p>
                          <p className="text-sm text-gray-600">74% do oceano nunca foi explorado. Conhecemos melhor a superfície da Lua do que o fundo do mar.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">O Grande Filtro</p>
                          <p className="text-sm text-gray-600">Os oceanos absorvem cerca de 30% do CO2 emitido na atmosfera, ajudando a regular o clima global.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Plástico em Todo Lugar</p>
                          <p className="text-sm text-gray-600">Estima-se que até 2050 haverá mais plástico do que peixes nos oceanos, em peso.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Teste Seus Conhecimentos!</h3>
                    {!showQuizResult ? (
                      <div className="space-y-4">
                        <p className="text-lg font-medium">{quizQuestions[currentQuiz].question}</p>
                        <div className="grid grid-cols-1 gap-2">
                          {quizQuestions[currentQuiz].options.map((option, index) => (
                            <Button 
                              key={index} 
                              variant="outline" 
                              onClick={() => handleQuizAnswer(index)}
                              className="justify-start text-left h-auto p-3"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center space-y-4">
                        <h4 className="text-xl font-bold">Quiz Concluído!</h4>
                        <p className="text-lg">Você acertou {quizScore} de {quizQuestions.length} perguntas.</p>
                        <p className="text-sm text-gray-600">
                          {quizScore === quizQuestions.length ? 
                            "Parabéns! Você é um expert em oceanos!" : 
                            "Continue aprendendo para proteger nossos oceanos!"
                          }
                        </p>
                        <Button onClick={resetQuiz} className="w-full sm:w-auto">Tentar Novamente</Button>
                      </div>
                    )}
                    {showQuizResult && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold">Explicação:</h5>
                        <p className="text-sm text-gray-700">{quizQuestions[currentQuiz - 1]?.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} BlueAware. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Feito com paixão pela preservação oceânica.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

