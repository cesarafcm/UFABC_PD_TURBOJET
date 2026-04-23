import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Thermometer, Zap, Wind, Activity } from 'lucide-react'

const REGIMES = [
  {
    id: 'idle',
    label: 'Idle',
    sublabel: 'Motor em repouso',
    power: 0,
    color: '#60a5fa',
    exhaust: 380,
    thrust: 8,
    airflow: 15,
    efficiency: 22,
    description: 'No regime de idle (marcha lenta), o motor opera com potência mínima — suficiente para manter-se girando e fornecer energia elétrica e hidráulica ao avião. A combustão é contínua mas suave, com baixo fluxo de combustível. O empuxo gerado não é suficiente para voo normal.',
    flameIntensity: 0.3,
    flowSpeed: 1,
  },
  {
    id: 'normal',
    label: 'Operação Normal',
    sublabel: 'Cruzeiro / Decolagem',
    power: 1,
    color: '#f97316',
    exhaust: 620,
    thrust: 55,
    airflow: 65,
    efficiency: 58,
    description: 'Na operação normal, o motor opera entre 85-100% da potência máxima. É o regime usado na decolagem e cruzeiro. O compressor comprime o ar vigorosamente, a combustão é intensa e a turbina extrai energia suficiente para acionar o compressor e ainda gerar empuxo pelo bocal.',
    flameIntensity: 0.7,
    flowSpeed: 2.5,
  },
  {
    id: 'afterburner',
    label: 'Afterburner',
    sublabel: 'Pós-combustão',
    power: 2,
    color: '#ef4444',
    exhaust: 1050,
    thrust: 100,
    airflow: 100,
    efficiency: 35,
    description: 'O afterburner (pós-combustão) injeta combustível adicional nos gases de exaustão, após a turbina. Isso aumenta o empuxo em até 50-60%, mas com consumo de combustível enormemente maior e eficiência térmica reduzida. Usado por aviões militares em situações que exigem aceleração máxima.',
    flameIntensity: 1.0,
    flowSpeed: 5,
  },
]

function AnimatedGauge({ value, max, color, label, unit, icon }) {
  const pct = Math.min(value / max, 1)
  const angle = -135 + pct * 270

  return (
    <div style={{
      backgroundColor: '#0f172a',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '14px',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
    }}>
      {/* Gauge arc */}
      <div style={{ position: 'relative', width: '90px', height: '70px', overflow: 'hidden' }}>
        <svg viewBox="0 0 100 80" style={{ width: '90px', height: '70px' }}>
          {/* Background arc */}
          <path d="M 10,70 A 40,40 0 0,1 90,70"
            stroke="#1e293b" strokeWidth="8" fill="none" strokeLinecap="round" />
          {/* Value arc */}
          <motion.path
            d="M 10,70 A 40,40 0 0,1 90,70"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="125.6"
            initial={{ strokeDashoffset: 125.6 }}
            animate={{ strokeDashoffset: 125.6 * (1 - pct) }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          {/* Needle */}
          <motion.line
            x1="50" y1="70"
            x2="50" y2="38"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            style={{ transformOrigin: '50px 70px' }}
            initial={{ rotate: -135 }}
            animate={{ rotate: angle }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <circle cx="50" cy="70" r="4" fill={color} />
        </svg>
      </div>

      <div style={{ textAlign: 'center' }}>
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '1.5rem', fontWeight: 800, color, lineHeight: 1 }}
        >
          {value}
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#64748b', marginLeft: '2px' }}>{unit}</span>
        </motion.div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'center' }}>
          {icon}
          {label}
        </div>
      </div>
    </div>
  )
}

function EngineAnimated({ regime }) {
  const r = REGIMES.find(r => r.id === regime) || REGIMES[0]

  return (
    <svg viewBox="0 0 720 170" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', minWidth: '500px' }}>

      {/* Engine body */}
      <rect x="130" y="45" width="440" height="80" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

      {/* Intake */}
      <polygon points="130,45 50,25 50,145 130,125"
        fill="#0f172a" stroke="#334155" strokeWidth="2" />

      {/* Compressor zone */}
      <rect x="130" y="45" width="150" height="80" fill="transparent" stroke="#334155" strokeWidth="0.5" />
      {[148, 167, 186, 205, 224, 243, 262, 275].map((x, i) => (
        <rect key={i} x={x} y="45" width="5" height="80" rx="2"
          fill={r.id === 'afterburner' ? '#a78bfa' : '#3b82f6'}
          opacity={r.id === 'idle' ? 0.3 : 0.7}
        />
      ))}

      {/* Combustion chamber */}
      <rect x="280" y="38" width="160" height="94" rx="8"
        fill="#0f172a"
        stroke={r.id === 'idle' ? '#334155' : r.color}
        strokeWidth="1.5"
      />

      {/* Flames — scale by intensity */}
      {r.flameIntensity > 0 && (
        <>
          <motion.ellipse cx="360" cy="85"
            rx={40 + r.flameIntensity * 30}
            ry={20 + r.flameIntensity * 15}
            fill="url(#flameAnimGrad)"
            animate={{ scaleX: [1, 1.05, 0.95, 1], scaleY: [1, 0.95, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut' }}
            style={{ transformOrigin: '360px 85px' }}
          />
          <motion.ellipse cx="360" cy="85"
            rx={22 + r.flameIntensity * 18}
            ry={10 + r.flameIntensity * 8}
            fill="url(#flameAnimGrad2)"
            animate={{ scaleX: [1, 0.9, 1.1, 1], scaleY: [1, 1.1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 0.4, ease: 'easeInOut' }}
            style={{ transformOrigin: '360px 85px' }}
          />
        </>
      )}

      {/* Afterburner extra flames in nozzle */}
      {r.id === 'afterburner' && (
        <>
          <motion.ellipse cx="620" cy="85" rx="50" ry="25"
            fill="url(#afterGrad)"
            animate={{ scaleX: [1, 1.1, 0.9, 1.05, 1], scaleY: [1, 0.9, 1.1, 0.95, 1] }}
            transition={{ repeat: Infinity, duration: 0.35, ease: 'easeInOut' }}
            style={{ transformOrigin: '620px 85px' }}
          />
          <motion.ellipse cx="660" cy="85" rx="65" ry="30"
            fill="#ef444430"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
          />
        </>
      )}

      {/* Turbine zone */}
      <rect x="440" y="45" width="130" height="80" fill="transparent" stroke="#334155" strokeWidth="0.5" />
      {[455, 473, 491, 509, 527, 545, 563].map((x, i) => (
        <rect key={i} x={x} y="45" width="5" height="80" rx="2"
          fill={r.id === 'afterburner' ? '#ef4444' : '#f97316'}
          opacity={r.id === 'idle' ? 0.3 : 0.6}
        />
      ))}

      {/* Nozzle */}
      <polygon points="570,45 665,65 665,105 570,125"
        fill="#0f172a" stroke="#334155" strokeWidth="2" />

      {/* Exhaust glow */}
      <motion.ellipse cx="695" cy="85"
        rx={r.id === 'afterburner' ? 55 : r.id === 'normal' ? 35 : 20}
        ry={r.id === 'afterburner' ? 28 : r.id === 'normal' ? 18 : 10}
        fill={r.color}
        opacity={r.id === 'afterburner' ? 0.5 : 0.3}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />

      {/* Air flow particles */}
      <AirFlowParticles speed={r.flowSpeed} color={r.id === 'idle' ? '#60a5fa' : r.id === 'normal' ? '#f97316' : '#ef4444'} />

      {/* Labels */}
      <text x="90" y="158" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">Entrada</text>
      <text x="205" y="158" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">Compressor</text>
      <text x="360" y="158" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">Câmara de Combustão</text>
      <text x="505" y="158" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">Turbina</text>
      <text x="618" y="158" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">Bocal</text>

      {/* Temperature color gradient overlay */}
      <defs>
        <linearGradient id="flameAnimGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="flameAnimGrad2">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="afterGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function AirFlowParticles({ speed, color }) {
  const [particles, setParticles] = useState(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 55 + i * 60,
      y: 75 + Math.sin(i) * 8,
      opacity: Math.random(),
    }))
  )

  useEffect(() => {
    if (speed === 0) return
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => {
        const newX = p.x + speed * 3
        return {
          ...p,
          x: newX > 660 ? 55 : newX,
          opacity: newX > 660 ? 0 : Math.min(1, p.opacity + 0.1),
        }
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [speed])

  if (speed === 0) return null

  return (
    <>
      {particles.map(p => (
        <circle key={p.id} cx={p.x} cy={p.y} r="3"
          fill={color} opacity={p.opacity * 0.7} />
      ))}
    </>
  )
}

export default function Modulo2() {
  const [selectedRegime, setSelectedRegime] = useState('normal')
  const regime = REGIMES.find(r => r.id === selectedRegime)

  return (
    <main style={{ minHeight: 'calc(100vh - 64px)', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: '8px',
            padding: '0.25rem 0.75rem',
            fontSize: '0.8rem',
            color: '#fb923c',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            MÓDULO 02
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Simulador Interativo
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Selecione o regime de operação e observe como o motor responde.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* Power lever */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '1.5rem',
            }}
          >
            <p style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem', textAlign: 'center' }}>
              Manete de Potência
            </p>

            {/* Vertical slider track */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              {[...REGIMES].reverse().map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegime(r.id)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: selectedRegime === r.id
                      ? `2px solid ${r.color}`
                      : '2px solid rgba(255,255,255,0.06)',
                    backgroundColor: selectedRegime === r.id ? `${r.color}12` : '#0f172a',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: selectedRegime === r.id ? r.color : '#334155',
                      boxShadow: selectedRegime === r.id ? `0 0 8px ${r.color}` : 'none',
                      transition: 'all 0.2s',
                    }} />
                    <div>
                      <div style={{ color: selectedRegime === r.id ? r.color : '#94a3b8', fontWeight: 700, fontSize: '0.875rem' }}>
                        {r.label}
                      </div>
                      <div style={{ color: '#475569', fontSize: '0.75rem' }}>{r.sublabel}</div>
                    </div>
                  </div>
                </button>
              ))}

              {/* Visual throttle indicator */}
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#0f172a',
                borderRadius: '4px',
                marginTop: '0.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <motion.div
                  animate={{ width: `${(regime.power + 1) / 3 * 100}%` }}
                  transition={{ duration: 0.5 }}
                  style={{
                    height: '100%',
                    background: `linear-gradient(90deg, #3b82f6, ${regime.color})`,
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                Potência: {Math.round((regime.power + 1) / 3 * 100)}%
              </div>
            </div>
          </motion.div>

          {/* Main simulator panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Engine diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                backgroundColor: '#1e293b',
                border: `1px solid ${regime.color}30`,
                borderRadius: '16px',
                padding: '1.5rem',
                transition: 'border-color 0.4s',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <p style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Diagrama do Motor
                </p>
                <motion.div
                  key={selectedRegime}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '0.25rem 0.875rem',
                    backgroundColor: `${regime.color}15`,
                    border: `1px solid ${regime.color}40`,
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    color: regime.color,
                    fontWeight: 700,
                  }}
                >
                  {regime.label}
                </motion.div>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <EngineAnimated regime={selectedRegime} />
              </div>
            </motion.div>

            {/* Gauges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem',
            }}>
              <AnimatedGauge
                value={regime.exhaust}
                max={1200}
                color="#ef4444"
                label="Temperatura"
                unit="°C"
                icon={<Thermometer size={11} />}
              />
              <AnimatedGauge
                value={regime.thrust}
                max={100}
                color={regime.color}
                label="Empuxo"
                unit="%"
                icon={<Zap size={11} />}
              />
              <AnimatedGauge
                value={regime.airflow}
                max={100}
                color="#60a5fa"
                label="Fluxo de Ar"
                unit="%"
                icon={<Wind size={11} />}
              />
              <AnimatedGauge
                value={regime.efficiency}
                max={100}
                color="#4ade80"
                label="Eficiência"
                unit="%"
                icon={<Activity size={11} />}
              />
            </div>

            {/* Description text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegime}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: `${regime.color}08`,
                  border: `1px solid ${regime.color}25`,
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    backgroundColor: regime.color,
                    boxShadow: `0 0 6px ${regime.color}`,
                  }} />
                  <span style={{ color: regime.color, fontWeight: 700, fontSize: '0.9rem' }}>
                    {regime.label} — {regime.sublabel}
                  </span>
                </div>
                <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.925rem' }}>
                  {regime.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '2rem',
            backgroundColor: '#1e293b',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '1.5rem',
            overflowX: 'auto',
          }}
        >
          <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
            Comparação entre regimes
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '400px' }}>
            <thead>
              <tr>
                {['Regime', 'Temp. Exaustão', 'Empuxo Relativo', 'Fluxo de Ar', 'Eficiência Térmica'].map(h => (
                  <th key={h} style={{
                    padding: '0.75rem 1rem',
                    textAlign: 'left',
                    color: '#64748b',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REGIMES.map((r) => (
                <tr key={r.id} style={{
                  backgroundColor: selectedRegime === r.id ? `${r.color}08` : 'transparent',
                  transition: 'background-color 0.3s',
                  cursor: 'pointer',
                }}
                  onClick={() => setSelectedRegime(r.id)}
                >
                  <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: r.color }} />
                      <span style={{ color: selectedRegime === r.id ? r.color : '#f1f5f9', fontWeight: selectedRegime === r.id ? 700 : 400 }}>
                        {r.label}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '0.875rem 1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{r.exhaust}°C</td>
                  <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ height: '6px', width: `${r.thrust}px`, backgroundColor: r.color, borderRadius: '3px', maxWidth: '100px' }} />
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{r.thrust}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '0.875rem 1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{r.airflow}%</td>
                  <td style={{ padding: '0.875rem 1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{r.efficiency}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </main>
  )
}
