import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  MapPin,
  Globe,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Abdullahi Ahmad</h1>
            <p className="text-xl mb-6 text-emerald-100">Computer Engineer & AI Research Specialist</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovative Computer Engineer with 4+ years of experience in Machine Learning and Generative AI. Winner of
              the 2023 Global Huawei ICT Competition, passionate about advancing artificial intelligence research.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Babura, Jigawa, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Mail className="w-4 h-4" />
                <span>abdulll8392@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="https://abdull6771.github.io/Abdullahi-Babura/" target="_blank">
                  <Globe className="w-4 h-4 mr-2" />
                  Portfolio
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="https://github.com/abdull6771" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Highlight */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 text-center">
                  <Trophy className="w-12 h-12 text-emerald-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">🏆 Grand Prize Winner</h3>
                    <p className="text-emerald-700 text-lg">2023 Global Huawei ICT Competition - Innovation/AI Track</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Experience Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-emerald-700">Machine Learning Engineer Intern</CardTitle>
                      <CardDescription className="text-lg font-medium">Nafabat.AI • California, U.S.A</CardDescription>
                    </div>
                    <Badge variant="secondary">Jan 2023 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Finetuned large video datasets using LlamaVID to recognize shoplifting using CCTV cameras</li>
                    <li>• Developed RAG applications to query InfluxDB data efficiently</li>
                    <li>• Built and deployed end-to-end Retrieval Augmented Generation applications using Gradio</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-emerald-700">Network Engineer Intern</CardTitle>
                      <CardDescription className="text-lg font-medium">
                        Cosmopolitan University • Abuja, Nigeria
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Nov 2024 - Apr 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Installed and configured Dahua CCTV surveillance systems for critical campus locations</li>
                    <li>• Managed equipment inventory for Computer Engineering Lab and Maker Space</li>
                    <li>• Configured network infrastructure for student hostels</li>
                    <li>• Set up ZKTeco biometric systems for attendance management</li>
                    <li>• Configured Huawei AirEngine 5761R-11 for extended wireless coverage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Education</h2>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-emerald-700">BEng Computer Engineering</CardTitle>
                      <CardDescription className="text-lg font-medium">
                        Ahmadu Bello University • Zaria, Nigeria
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Oct 2018 - Nov 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-emerald-100 text-emerald-800">CGPA: 3.69/5.00</Badge>
                    <Badge className="bg-emerald-100 text-emerald-800">Upper Second Class</Badge>
                  </div>
                  <p className="mt-2 text-gray-600">Supervisor: Prof. Muhammad Bashir Muazu</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-emerald-700">Diploma in Computer Engineering</CardTitle>
                      <CardDescription className="text-lg font-medium">
                        Institute of Computing and ICT, ABU • Zaria, Nigeria
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Aug 2016 - Nov 2018</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-emerald-100 text-emerald-800">CGPA: 3.52/4.00</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-700">SmartWaste AI Robot</CardTitle>
                  <CardDescription>March 2023 - July 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    AI-powered robot using deep learning to detect non-biodegradable waste and autonomously dispose of
                    it using a robotic arm.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">Computer Vision</Badge>
                    <Badge variant="outline">Robotics</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-700">CompengChat RAG Application</CardTitle>
                  <CardDescription>July 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Fast and efficient Retrieval Augmented Generation application for answering student queries about
                    the Computer Engineering department.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">RAG</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Telegram Bot</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Brain Tumor Classification</CardTitle>
                  <CardDescription>January 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Transfer learning model using VGG16 as feature extractor for brain tumor classification, achieving
                    92.3% accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Transfer Learning</Badge>
                    <Badge variant="outline">Medical AI</Badge>
                    <Badge variant="outline">VGG16</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Network Failure Prediction</CardTitle>
                  <CardDescription>July 2022 - Aug 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Machine learning model using LSTM to predict network failures on CNFs 5GC with eBPF, achieving 88.3%
                    accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">LSTM</Badge>
                    <Badge variant="outline">5G Networks</Badge>
                    <Badge variant="outline">eBPF</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-700">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>MATLAB</Badge>
                    <Badge>LaTeX</Badge>
                    <Badge>ROS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-700">ML Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PyTorch</Badge>
                    <Badge>TensorFlow</Badge>
                    <Badge>Keras</Badge>
                    <Badge>Scikit-Learn</Badge>
                    <Badge>XGBoost</Badge>
                    <Badge>MindSpore</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-700">Cloud Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>GCP</Badge>
                    <Badge>Azure</Badge>
                    <Badge>Huawei Cloud</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-600" />
                    <span className="font-medium">Huawei Certified ICT Professional - AI</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-600" />
                    <span className="font-medium">Coursera TensorFlow Developer Certificate</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-600" />
                    <span className="font-medium">Huawei Certified ICT Associate - AI</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-600" />
                    <span className="font-medium">Huawei Certified ICT Associate - Cloud Services</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Publications Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Research & Publications</h2>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-700">Published Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>An Artificial Intelligence Smart Waste Robot</strong> (2024) - Poster Presentation, Department
                  of Computer Engineering, Ahmadu Bello University, Nigeria.
                </p>
                <Separator className="my-4" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Research in Progress</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Software Development Agent: An AI-Driven Framework for Automating the Software Development
                      Lifecycle
                    </li>
                    <li>• NeuroScan: AI-Powered Brain Tumor Classification Using Deep Learning</li>
                    <li>• Developing a Multi-Agent LLM System for Startup Analysis Using LangGraph</li>
                    <li>• Developing an LLM-Powered Coding Agent with LangGraph</li>
                    <li>• AI-Driven Educational Tool for Personalized Learning Paths</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
            </div>
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <p className="text-lg text-gray-700 mb-6">
                    Interested in collaborating on AI research or discussing opportunities? I'd love to hear from you!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                      <Link href="mailto:abdulll8392@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Me
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="https://abdull6771.github.io/Abdullahi-Babura/" target="_blank">
                        <Globe className="w-4 h-4 mr-2" />
                        View Portfolio
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Abdullahi Ahmad. Passionate about advancing AI research and development.
          </p>
        </div>
      </footer>
    </div>
  )
}
