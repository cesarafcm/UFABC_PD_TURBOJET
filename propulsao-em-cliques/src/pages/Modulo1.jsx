import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wind, Zap, Flame, Settings, ChevronRight } from 'lucide-react'

const components = [
  {
    id: 'intake',
    name: 'Entrada de Ar',
    icon: <Wind size={28} color="#60a5fa" />,
    color: '#60a5fa',
    analogy: 'Como o nariz respirando fundo antes de soprar',
    analogyIcon: '🌬️',
    description: 'A entrada de ar (intake) captura o ar atmosférico e o direciona para o motor de forma controlada. Em aviões de alta velocidade, o formato da entrada é projetado para desacelerar o ar supersônico antes que ele entre no compressor.',
    facts: ['O ar entra a centenas de km/h', 'A geometria do intake afeta toda a eficiência', 'Em caças, o intake pode ser ajustável'],
    svgX: 80,
  },
  {
    id: 'compressor',
    name: 'Compressor',
    icon: <Settings size={28} color="#a78bfa" />,
    color: '#a78bfa',
    analogy: 'Como uma bomba de ar de bicicleta em alta velocidade',
    analogyIcon: '🔧',
    description: 'O compressor aumenta drasticamente a pressão do ar, usando fileiras de pás rotativas (rotor) e fixas (estator). Quanto maior a razão de compressão, mais energia pode ser extraída na combustão. Em turbojatos modernos, a pressão pode ser 40× maior do que na entrada.',
    facts: ['Pode ter 15-30 estágios de compressão', 'Temperatura do ar sobe significativamente', 'Consome a maior parte da energia da turbina'],
    svgX: 210,
  },
  {
    id: 'combustion',
    name: 'Câmara de Combustão',
    icon: <Flame size={28} color="#fb923c" />,
    color: '#fb923c',
    analogy: 'Como o fogão de uma cozinha industrial — sempre aceso, nunca apaga',
    analogyIcon: '🔥',
    description: 'O combustível (geralmente querosene de aviação — Jet-A) é injetado e queimado continuamente. A temperatura pode ultrapassar 1500°C, mas as pás da turbina são resfriadas por canais de ar interno para sobreviver. É aqui que a maior parte da energia química vira calor.',
    facts: ['Temperatura >1500°C nos gases', 'Queima contínua (não intermitente como no carro)', 'É onde mais energia se "perde" como calor'],
    svgX: 340,
  },
  {
    id: 'turbine',
    name: 'Turbina',
    icon: <Zap size={28} color="#f97316" />,
    color: '#f97316',
    analogy: 'Como uma roda d\'água, mas movida por gases quentes',
    analogyIcon: '⚙️',
    description: 'Os gases quentes expandem através das pás da turbina, fazendo-a girar. Essa rotação aciona o compressor no mesmo eixo — é um ciclo: a turbina alimenta o compressor. O que resta de energia nos gases é usado para gerar empuxo no bocal.',
    facts: ['Gira a dezenas de milhares de RPM', 'Materiais especiais resistem ao calor extremo', 'Aciona diretamente o compressor no eixo'],
    svgX: 470,
  },
  {
    id: 'nozzle',
    name: 'Bocal / Exaustão',
    icon: <ChevronRight size={28} color="#4ade80" />,
    color: '#4ade80',
    analogy: 'Como apertar a ponta de uma mangueira para o jato d\'água ir mais longe',
    analogyIcon: '🚀',
    description: 'O bocal acelera os gases de exaustão para velocidades supersônicas. Pela 3ª Lei de Newton (ação e reação), essa saída de gases para trás gera o empuxo que impulsiona o avião para frente. Em motores com pós-combustão, combustível adicional é queimado aqui.',
    facts: ['Gases saem a 500-700°C', 'Geometria variável em aviões militares', 'Afterburner fica aqui — dobra o empuxo'],
    svgX: 590,
  },
]

const brayton = [
  { label: '1 → 2', phase: 'Compressão', desc: 'O ar é comprimido, pressão e temperatura sobem', color: '#60a5fa' },
  { label: '2 → 3', phase: 'Combustão', desc: 'Calor é adicionado na pressão constante, temperatura dispara', color: '#f97316' },
  { label: '3 → 4', phase: 'Expansão', desc: 'Gases se expandem na turbina, gerando trabalho', color: '#fb923c' },
  { label: '4 → 1', phase: 'Exaustão', desc: 'Gases são expulsos pelo bocal, gerando empuxo', color: '#4ade80' },
]

export default function Modulo1() {
  const [active, setActive] = useState(null)

  const activeComp = components.find(c => c.id === active)

  return (
    <main style={{ minHeight: 'calc(100vh - 64px)', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              backgroundColor: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: '8px',
              padding: '0.25rem 0.75rem',
              fontSize: '0.8rem',
              color: '#60a5fa',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}>
              MÓDULO 01
            </div>
          </div>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}>
            O que é um motor turbojato?
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '650px', lineHeight: 1.6 }}>
            Clique em cada componente do diagrama para explorar como ele funciona e qual é a sua analogia do dia a dia.
          </p>
        </motion.div>

        {/* Interactive Engine Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            backgroundColor: '#1e293b',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Diagrama Interativo — Clique nos componentes
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <EngineSVG active={active} setActive={setActive} />
          </div>

          {/* Component detail panel */}
          <AnimatePresence mode="wait">
            {activeComp && (
              <motion.div
                key={activeComp.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: `${activeComp.color}08`,
                  border: `1px solid ${activeComp.color}30`,
                  borderRadius: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{
                    width: '52px', height: '52px',
                    backgroundColor: `${activeComp.color}15`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {activeComp.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <h3 style={{ color: activeComp.color, fontSize: '1.25rem', fontWeight: 700 }}>
                        {activeComp.name}
                      </h3>
                      <span style={{ fontSize: '1.5rem' }}>{activeComp.analogyIcon}</span>
                    </div>
                    <p style={{
                      color: '#64748b',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      marginBottom: '0.75rem',
                    }}>
                      Analogia: {activeComp.analogy}
                    </p>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1rem' }}>
                      {activeComp.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {activeComp.facts.map((fact, i) => (
                        <span key={i} style={{
                          padding: '0.3rem 0.75rem',
                          backgroundColor: `${activeComp.color}10`,
                          border: `1px solid ${activeComp.color}25`,
                          borderRadius: '100px',
                          fontSize: '0.8rem',
                          color: activeComp.color,
                        }}>
                          ✦ {fact}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {!activeComp && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', color: '#475569', marginTop: '1.5rem', fontSize: '0.9rem' }}
              >
                ↑ Clique em qualquer componente para ver os detalhes
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Component cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {components.map((comp, i) => (
            <motion.button
              key={comp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => setActive(active === comp.id ? null : comp.id)}
              style={{
                padding: '1.25rem',
                backgroundColor: active === comp.id ? `${comp.color}12` : '#1e293b',
                border: `1px solid ${active === comp.id ? comp.color + '50' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ marginBottom: '0.75rem' }}>{comp.icon}</div>
              <div style={{ color: comp.color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                0{i + 1}
              </div>
              <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem' }}>
                {comp.name}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Brayton Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#1e293b',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            marginBottom: '0.5rem',
          }}>
            O Ciclo de Brayton
          </h2>
          <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>
            Motores turbojato operam no Ciclo de Brayton — um ciclo termodinâmico de 4 fases que transforma calor em trabalho mecânico e empuxo.
          </p>

          {/* PV diagram qualitative */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 auto' }}>
              <BraytonPVChart />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {brayton.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: `${step.color}15`,
                      border: `1px solid ${step.color}40`,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: step.color,
                      flexShrink: 0,
                    }}>
                      {step.label}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: step.color, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                        {step.phase}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>
                        {step.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

function EngineSVG({ active, setActive }) {
  const parts = [
    { id: 'intake', label: 'Entrada de Ar', x: 30, y: 40, w: 100, h: 80, color: '#60a5fa', type: 'intake' },
    { id: 'compressor', label: 'Compressor', x: 130, y: 30, w: 150, h: 100, color: '#a78bfa', type: 'rect' },
    { id: 'combustion', label: 'Câmara de Combustão', x: 280, y: 25, w: 160, h: 110, color: '#fb923c', type: 'rect' },
    { id: 'turbine', label: 'Turbina', x: 440, y: 30, w: 130, h: 100, color: '#f97316', type: 'rect' },
    { id: 'nozzle', label: 'Bocal', x: 570, y: 40, w: 100, h: 80, color: '#4ade80', type: 'nozzle' },
  ]

  return (
    <svg viewBox="0 0 710 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', minWidth: '600px', height: '160px', cursor: 'pointer' }}>

      {/* Engine body base */}
      <rect x="130" y="40" width="440" height="80" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

      {/* Intake */}
      <polygon
        points="130,40 50,20 50,140 130,120"
        fill={active === 'intake' ? '#60a5fa20' : '#0f172a'}
        stroke={active === 'intake' ? '#60a5fa' : '#334155'}
        strokeWidth="2"
        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
        onClick={() => setActive(active === 'intake' ? null : 'intake')}
      />

      {/* Compressor section */}
      <rect x="130" y="40" width="150" height="80"
        fill={active === 'compressor' ? '#a78bfa15' : 'transparent'}
        stroke={active === 'compressor' ? '#a78bfa' : '#334155'}
        strokeWidth={active === 'compressor' ? 2 : 1}
        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
        onClick={() => setActive(active === 'compressor' ? null : 'compressor')}
      />
      {/* Compressor blades */}
      {[150, 168, 186, 204, 222, 240, 258, 272].map((x, i) => (
        <rect key={i} x={x} y="40" width="6" height="80" rx="2"
          fill={active === 'compressor' ? '#a78bfa' : '#3b82f6'}
          opacity={active === 'compressor' ? 0.8 : 0.4}
          style={{ cursor: 'pointer', pointerEvents: 'none' }}
        />
      ))}

      {/* Combustion chamber */}
      <rect x="280" y="35" width="160" height="90"
        rx="6"
        fill={active === 'combustion' ? '#fb923c12' : '#0f172a'}
        stroke={active === 'combustion' ? '#fb923c' : '#f97316'}
        strokeWidth={active === 'combustion' ? 2 : 1}
        strokeDasharray={active === 'combustion' ? '0' : '4 2'}
        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
        onClick={() => setActive(active === 'combustion' ? null : 'combustion')}
      />
      {/* Flame */}
      <ellipse cx="360" cy="80" rx={active === 'combustion' ? 55 : 45} ry={active === 'combustion' ? 28 : 22}
        fill="url(#flame1)" opacity="0.85" style={{ pointerEvents: 'none', transition: 'all 0.3s' }} />
      <ellipse cx="360" cy="80" rx={active === 'combustion' ? 32 : 25} ry={active === 'combustion' ? 16 : 12}
        fill="url(#flame2)" opacity="0.9" style={{ pointerEvents: 'none', transition: 'all 0.3s' }} />

      {/* Turbine section */}
      <rect x="440" y="40" width="130" height="80"
        fill={active === 'turbine' ? '#f9731615' : 'transparent'}
        stroke={active === 'turbine' ? '#f97316' : '#334155'}
        strokeWidth={active === 'turbine' ? 2 : 1}
        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
        onClick={() => setActive(active === 'turbine' ? null : 'turbine')}
      />
      {/* Turbine blades */}
      {[455, 473, 491, 509, 527, 545, 563].map((x, i) => (
        <rect key={i} x={x} y="40" width="6" height="80" rx="2"
          fill={active === 'turbine' ? '#f97316' : '#f97316'}
          opacity={active === 'turbine' ? 0.8 : 0.4}
          style={{ pointerEvents: 'none' }}
        />
      ))}

      {/* Nozzle */}
      <polygon
        points="570,40 660,60 660,100 570,120"
        fill={active === 'nozzle' ? '#4ade8015' : '#0f172a'}
        stroke={active === 'nozzle' ? '#4ade80' : '#334155'}
        strokeWidth="2"
        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
        onClick={() => setActive(active === 'nozzle' ? null : 'nozzle')}
      />
      {/* Exhaust glow */}
      <ellipse cx="690" cy="80" rx="40" ry="22"
        fill="#f97316" opacity="0.25" style={{ pointerEvents: 'none' }} />

      {/* Labels */}
      <text x="90" y="153" textAnchor="middle" fill={active === 'intake' ? '#60a5fa' : '#64748b'} fontSize="11" fontFamily="Inter, sans-serif" fontWeight={active === 'intake' ? '700' : '400'}>
        Entrada
      </text>
      <text x="205" y="153" textAnchor="middle" fill={active === 'compressor' ? '#a78bfa' : '#64748b'} fontSize="11" fontFamily="Inter, sans-serif" fontWeight={active === 'compressor' ? '700' : '400'}>
        Compressor
      </text>
      <text x="360" y="153" textAnchor="middle" fill={active === 'combustion' ? '#fb923c' : '#64748b'} fontSize="11" fontFamily="Inter, sans-serif" fontWeight={active === 'combustion' ? '700' : '400'}>
        Câmara de Combustão
      </text>
      <text x="505" y="153" textAnchor="middle" fill={active === 'turbine' ? '#f97316' : '#64748b'} fontSize="11" fontFamily="Inter, sans-serif" fontWeight={active === 'turbine' ? '700' : '400'}>
        Turbina
      </text>
      <text x="615" y="153" textAnchor="middle" fill={active === 'nozzle' ? '#4ade80' : '#64748b'} fontSize="11" fontFamily="Inter, sans-serif" fontWeight={active === 'nozzle' ? '700' : '400'}>
        Bocal
      </text>

      {/* Air flow arrows */}
      {[55, 75, 95, 115].map((x, i) => (
        <path key={i} d={`M${x},80 L${x + 12},80`}
          stroke="#3b82f6" strokeWidth="1.5"
          markerEnd="url(#arrowBlue)"
          opacity={0.6 + i * 0.1}
        />
      ))}

      {/* Click hint circles on each section */}
      {parts.map(p => {
        const cx = p.x + (p.w / 2)
        return (
          <circle key={p.id} cx={cx} cy={80} r="6"
            fill={active === p.id ? p.color : 'transparent'}
            stroke={p.color}
            strokeWidth="1.5"
            opacity={active === p.id ? 1 : 0.5}
            style={{ pointerEvents: 'none', transition: 'all 0.2s' }}
          />
        )
      })}

      <defs>
        <linearGradient id="flame1" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
          <stop offset="40%" stopColor="#f97316" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="flame2" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.9" />
        </linearGradient>
        <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  )
}

function BraytonPVChart() {
  return (
    <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '280px', height: '220px' }}>
      {/* Background */}
      <rect x="40" y="10" width="230" height="180" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Axes */}
      <line x1="60" y1="170" x2="255" y2="170" stroke="#334155" strokeWidth="1.5" />
      <line x1="60" y1="170" x2="60" y2="25" stroke="#334155" strokeWidth="1.5" />

      {/* Axis labels */}
      <text x="155" y="195" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="Inter, sans-serif">Volume (V)</text>
      <text x="20" y="100" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="Inter, sans-serif" transform="rotate(-90, 20, 100)">Pressão (P)</text>

      {/* Brayton cycle path */}
      {/* 1: bottom-right low P, high V */}
      {/* 2: top-left high P, low V (after compression) */}
      {/* 3: top-right higher T, same high P */}
      {/* 4: bottom-right after expansion */}

      {/* 1→2 Compression (isentropic - curved) */}
      <path d="M200,150 Q140,90 90,60"
        stroke="#60a5fa" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 2→3 Heat addition (isobaric) */}
      <path d="M90,60 L180,60"
        stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 3→4 Expansion (isentropic) */}
      <path d="M180,60 Q230,90 220,150"
        stroke="#fb923c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 4→1 Heat rejection */}
      <path d="M220,150 L200,150"
        stroke="#4ade80" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Filled area = work */}
      <path d="M200,150 Q140,90 90,60 L180,60 Q230,90 220,150 Z"
        fill="rgba(59,130,246,0.08)" />

      {/* Point labels */}
      <circle cx="200" cy="150" r="4" fill="#60a5fa" />
      <text x="207" y="148" fill="#60a5fa" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">1</text>

      <circle cx="90" cy="60" r="4" fill="#a78bfa" />
      <text x="75" y="58" fill="#a78bfa" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">2</text>

      <circle cx="180" cy="60" r="4" fill="#fb923c" />
      <text x="183" y="53" fill="#fb923c" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">3</text>

      <circle cx="220" cy="150" r="4" fill="#4ade80" />
      <text x="225" y="148" fill="#4ade80" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">4</text>

      {/* Work label */}
      <text x="155" y="110" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.7">
        Trabalho
      </text>

      {/* Title */}
      <text x="155" y="208" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="Inter, sans-serif">
        Diagrama P-V qualitativo
      </text>
    </svg>
  )
}
