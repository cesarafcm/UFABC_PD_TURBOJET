import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, Sliders, BookOpen, ChevronRight, GraduationCap, Plane, Flame, Atom, Wind } from 'lucide-react'

const modules = [
  {
    to: '/modulo1',
    icon: <Cpu size={32} color="#3b82f6" />,
    number: '01',
    title: 'O que é um motor turbojato?',
    description: 'Explore os 4 componentes principais, o ciclo de Brayton e como o ar vira empuxo com analogias do dia a dia.',
    color: '#3b82f6',
    tags: ['Componentes', 'Ciclo de Brayton', 'Animações'],
  },
  {
    to: '/modulo2',
    icon: <Sliders size={32} color="#f97316" />,
    number: '02',
    title: 'Simulador Interativo',
    description: 'Controle a potência do motor e veja dinamicamente como temperatura, empuxo e eficiência se comportam.',
    color: '#f97316',
    tags: ['Idle', 'Operação Normal', 'Afterburner'],
  },
  {
    to: '/modulo3',
    icon: <BookOpen size={32} color="#22c55e" />,
    number: '03',
    title: 'O que diz a ciência?',
    description: 'Artigos científicos traduzidos para linguagem acessível.',
    color: '#22c55e',
    tags: ['Artigos', 'Pesquisa', 'Aplicações'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />

        {/* Glow orbs */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '2rem',
              fontSize: '0.85rem',
              color: '#93c5fd',
              fontWeight: 500,
            }}
          >
            <GraduationCap size={14} />
            Projeto de Extensão Universitária — UFABC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: '#f1f5f9' }}>Propulsão</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>em Cliques</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: 1.7,
              marginBottom: '3rem',
              maxWidth: '680px',
              margin: '0 auto 3rem',
            }}
          >
            Uma plataforma interativa para entender como motores turbojato funcionam —
            da entrada de ar ao empuxo, com simulações, ciência e zero complicação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/modulo1" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              Começar a explorar
              <ChevronRight size={18} />
            </Link>
            <Link to="/modulo2" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              backgroundColor: 'transparent',
              color: '#f1f5f9',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.2s',
            }}>
              <Sliders size={18} />
              Ir ao Simulador
            </Link>
          </motion.div>
        </div>

        {/* Turbojet engine SVG decoration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ marginTop: '4rem', width: '100%', maxWidth: '700px' }}
        >
          <TurbojetDeco />
        </motion.div>
      </section>

      {/* Intro context section */}
      <section style={{
        padding: '5rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              style={{ color: '#f97316', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Antes de começar
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', lineHeight: 1.2, marginBottom: '1rem' }}
            >
              O que é um motor turbojato — e por que ele importa?
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}
            >
              Se você nunca ouviu falar de turbojato, não se preocupe. Esta página foi feita exatamente pra você.
              Vamos começar do zero: o que é esse motor, onde você já o encontrou na vida real, e o que ele revela sobre a física do mundo.
            </motion.p>
          </motion.div>

          {/* Where do we find it */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginBottom: '4rem' }}
          >
            <motion.h3
              custom={0}
              variants={fadeUp}
              style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem', textAlign: 'center' }}
            >
              Onde encontramos motores turbojato?
            </motion.h3>
            <motion.p
              custom={1}
              variants={fadeUp}
              style={{ color: '#94a3b8', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto 2.5rem', textAlign: 'center', fontSize: '0.98rem' }}
            >
              Sempre que você embarca em um avião comercial, está sentado bem ao lado de um (ou mais) motores turbojato.
              Eles são o coração de praticamente toda a aviação moderna — de voos domésticos a jatos militares supersônicos.
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}>
              {[
                {
                  icon: <Plane size={28} color="#3b82f6" />,
                  color: '#3b82f6',
                  title: 'Aviação Comercial',
                  desc: 'Todo avião de passageiros que você já pegou usa uma variante do motor turbojato. São os motores que permitem voar de São Paulo a Lisboa em 10 horas.',
                },
                {
                  icon: <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>✈️</span>,
                  color: '#a78bfa',
                  title: 'Aviação Militar',
                  desc: 'Caças como o F-16 e o Gripen usam turbojatos que chegam a velocidades supersônicas. São motores menores, mas extremamente potentes.',
                },
                {
                  icon: <Wind size={28} color="#22c55e" />,
                  color: '#22c55e',
                  title: 'Mísseis e Foguetes',
                  desc: 'Versões compactas do turbojato aparecem em mísseis de cruzeiro. O princípio de propulsão por reação é o mesmo que levou humanos à Lua.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  style={{
                    backgroundColor: '#1e293b',
                    border: `1px solid ${item.color}25`,
                    borderRadius: '16px',
                    padding: '1.75rem',
                  }}
                >
                  <div style={{
                    width: '52px', height: '52px',
                    backgroundColor: `${item.color}15`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    {item.icon}
                  </div>
                  <h4 style={{ color: item.color, fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What physics does it teach */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '2.5rem',
              marginBottom: '4rem',
            }}
          >
            <motion.h3
              custom={0}
              variants={fadeUp}
              style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}
            >
              O que esse motor nos ensina sobre física?
            </motion.h3>
            <motion.p
              custom={1}
              variants={fadeUp}
              style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.98rem', maxWidth: '700px' }}
            >
              Um turbojato é, na prática, um laboratório de física em movimento. Ele reúne vários princípios que você estuda no ensino médio — só que funcionando juntos, em alta velocidade, a 10 km de altitude.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  icon: <span style={{ fontSize: '1.5rem' }}>↔️</span>,
                  color: '#3b82f6',
                  principle: '3ª Lei de Newton — Ação e Reação',
                  explain: 'O motor joga gases para trás em alta velocidade → o avião é empurrado para frente. É o mesmo princípio de quando você solta um balão de ar: o ar sai para um lado, o balão vai para o outro.',
                },
                {
                  icon: <Flame size={22} color="#f97316" />,
                  color: '#f97316',
                  principle: 'Termodinâmica — Calor vira trabalho',
                  explain: 'A combustão libera energia química do querosene como calor. Esse calor faz os gases se expandirem e moverem as turbinas. É exatamente o que acontece num motor de carro — só que de forma contínua, não em explosões.',
                },
                {
                  icon: <Atom size={22} color="#a78bfa" />,
                  color: '#a78bfa',
                  principle: 'Conservação de Energia',
                  explain: 'Cada etapa do motor transforma energia de uma forma para outra: química → térmica → cinética → empuxo. Nada se perde, apenas muda de forma — exatamente como diz a Lei da Conservação de Energia.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.25rem',
                    backgroundColor: `${item.color}08`,
                    border: `1px solid ${item.color}20`,
                    borderRadius: '12px',
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    backgroundColor: `${item.color}15`,
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: item.color, fontWeight: 700, marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                      {item.principle}
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                      {item.explain}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why high school */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: '2.5rem',
              backgroundColor: 'rgba(59,130,246,0.05)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '20px',
              marginBottom: '1rem',
            }}
          >
            <div style={{ flex: '0 0 auto' }}>
              <div style={{
                width: '72px', height: '72px',
                backgroundColor: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <GraduationCap size={36} color="#3b82f6" />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <motion.h3
                custom={0}
                variants={fadeUp}
                style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.6rem' }}
              >
                Por que estudar turbojatos no ensino médio?
              </motion.h3>
              <motion.p
                custom={1}
                variants={fadeUp}
                style={{ color: '#94a3b8', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}
              >
                Porque ele conecta, de forma concreta e visível, aquilo que parece abstrato na sala de aula.
                Leis de Newton, termodinâmica, conservação de energia — tudo isso está presente num único objeto que você vê decolando no aeroporto.
                Este site foi criado como projeto de extensão da UFABC justamente para tornar esses conceitos tangíveis, interativos e acessíveis a qualquer pessoa curiosa.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Modules section */}
      <section style={{
        padding: '5rem 1.5rem',
        backgroundColor: 'rgba(30, 41, 59, 0.3)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Módulos de Aprendizado
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', lineHeight: 1.2 }}
            >
              Três caminhos para entender a propulsão
            </motion.h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {modules.map((mod, i) => (
              <motion.div
                key={mod.to}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link to={mod.to} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    backgroundColor: '#1e293b',
                    border: `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '16px',
                    padding: '2rem',
                    height: '100%',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = mod.color + '50'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `0 20px 60px ${mod.color}20`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: mod.color,
                      opacity: 0.08,
                      lineHeight: 1,
                    }}>
                      {mod.number}
                    </div>

                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: `${mod.color}15`,
                      border: `1px solid ${mod.color}30`,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      {mod.icon}
                    </div>

                    <div style={{ color: mod.color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Módulo {mod.number}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {mod.title}
                    </h3>

                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {mod.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {mod.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: `${mod.color}10`,
                          border: `1px solid ${mod.color}25`,
                          borderRadius: '100px',
                          fontSize: '0.75rem',
                          color: mod.color,
                          fontWeight: 500,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      marginTop: '1.5rem',
                      color: mod.color,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}>
                      Acessar módulo <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{
              width: '28px', height: '28px',
              backgroundColor: '#3b82f6',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={16} color="white" />
            </div>
            <span style={{ fontWeight: 700, color: '#f1f5f9' }}>Propulsão em Cliques</span>
          </div>

          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
            Projeto de Extensão Universitária — Universidade Federal do ABC (UFABC)
          </p>

          <p style={{ color: '#334155', fontSize: '0.8rem', marginTop: '2rem' }}>
            © 2026 UFABC — Uso educacional e não comercial
          </p>
        </div>
      </footer>
    </main>
  )
}

function TurbojetDeco() {
  return (
    <svg viewBox="0 0 700 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', opacity: 0.7 }}>
      {/* Engine body */}
      <rect x="100" y="55" width="500" height="50" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />

      {/* Intake cone */}
      <polygon points="100,55 60,35 60,125 100,105" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

      {/* Compressor blades */}
      {[140, 165, 190, 215, 240].map((x, i) => (
        <g key={i}>
          <rect x={x} y="55" width="8" height="50" rx="2" fill="#3b82f6" opacity="0.6" />
        </g>
      ))}

      {/* Combustion chamber */}
      <rect x="270" y="50" width="130" height="60" rx="8" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" strokeDasharray="0" />

      {/* Flames */}
      <ellipse cx="335" cy="80" rx="40" ry="22" fill="url(#flameGrad)" opacity="0.8" />
      <ellipse cx="335" cy="80" rx="25" ry="14" fill="url(#flameGrad2)" opacity="0.9" />

      {/* Turbine blades */}
      {[420, 445, 470, 495].map((x, i) => (
        <rect key={i} x={x} y="55" width="8" height="50" rx="2" fill="#f97316" opacity="0.6" />
      ))}

      {/* Nozzle */}
      <polygon points="600,55 650,70 650,90 600,105" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

      {/* Exhaust glow */}
      <ellipse cx="680" cy="80" rx="35" ry="18" fill="#f97316" opacity="0.25" />

      {/* Labels */}
      <text x="175" y="130" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="Inter, sans-serif">Compressor</text>
      <text x="335" y="130" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="Inter, sans-serif">Combustão</text>
      <text x="460" y="130" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="Inter, sans-serif">Turbina</text>
      <text x="80" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">Entrada</text>
      <text x="630" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">Bocal</text>

      {/* Air flow arrows */}
      {[105, 130, 155].map((x, i) => (
        <path key={i} d={`M${x},80 L${x + 15},80`} stroke="#3b82f6" strokeWidth="1.5"
          markerEnd="url(#arrowBlue)" opacity={0.5 + i * 0.15} />
      ))}

      <defs>
        <linearGradient id="flameGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="flameGrad2" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
        </linearGradient>
        <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  )
}

function Zap({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
