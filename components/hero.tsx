import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Banner image as background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-Am5TWnOHE4Ao8OFYPwtCxtckoPzhrC.jpeg"
          alt="Cybersecurity network background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Mohammed Fouzan Aamiri</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-6">Cybersecurity Professional</h2>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">
            Specializing in threat intelligence, network security, and vulnerability management. Passionate about
            securing digital infrastructures and protecting against cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.l.jpg-17urnqeJW2EdI50ZjVhEMvHFHojZty.jpeg"
              alt="Mohammed Fouzan Aamiri"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about">
          <ChevronDown className="h-10 w-10 text-white" />
        </Link>
      </div>
    </section>
  )
}

