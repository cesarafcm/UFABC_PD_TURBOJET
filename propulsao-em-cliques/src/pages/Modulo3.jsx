import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, Lightbulb, FlaskConical, Wrench } from 'lucide-react'

const articles = [
  {
    id: 1,
    accessibleTitle: 'Onde o motor perde mais energia?',
    source: 'ŞEN, Soner (2021)',
    journal: 'International Journal of Aeronautics and Astronautics, v.2, n.1, p.14–17',
    color: '#f97316',
    icon: <FlaskConical size={22} color="#f97316" />,
    tags: ['Eficiência', 'Termodinâmica', 'Câmara de Combustão'],
    summary: 'Pesquisadores analisaram um motor turbojato e descobriram que a câmara de combustão é o componente onde mais energia se "perde" — como calor que não vira movimento. Isso ajuda engenheiros a saber onde focar os esforços de melhoria.',
    whatItMeans: 'Em um motor turbojato, nem toda a energia do combustível vira empuxo. A análise exergética mostrou que a câmara de combustão foi responsável por 96,18% de toda a destruição de exergia do motor — com eficiência exergética de apenas 74,57%. Melhorar a eficiência da combustão é, portanto, o caminho mais promissor para motores mais econômicos.',
    keyFinding: 'A câmara de combustão foi responsável por 96,18% de toda a destruição de exergia do motor, com eficiência exergética de 74,57%.',
    relevance: 'Alta',
    year: 2021,
    url: 'https://dergipark.org.tr/en/download/article-file/1796154',
  },
  {
    id: 2,
    accessibleTitle: 'Motores em miniatura como sala de aula',
    source: 'CATANA, Razvan Marius; CICAN, Grigore; BADEA, Gabriel-Petre (2024)',
    journal: 'Applied Sciences, v.14, n.15, p.6754',
    color: '#3b82f6',
    icon: <BookOpen size={22} color="#3b82f6" />,
    tags: ['Educação', 'Mini-motores', 'Pesquisa Experimental'],
    summary: 'Cientistas mostraram que versões miniaturizadas de motores turbojato são excelentes ferramentas de ensino. Com eles, é possível estudar termodinâmica, acústica e combustíveis alternativos em laboratório, sem precisar de uma fábrica inteira.',
    whatItMeans: 'Microturbinas instaladas em laboratórios portáteis são validadas como ferramentas completas de ensino, permitindo medir pressão, temperatura e empuxo sem infraestrutura complexa. O estudo valida o uso desses motores como plataforma de aprendizagem ativa para engenharia aeronáutica.',
    keyFinding: 'Microturbinas em laboratórios portáteis permitem medir pressão, temperatura e empuxo, sendo validadas como ferramentas completas de ensino.',
    relevance: 'Alta',
    year: 2024,
    url: 'https://doi.org/10.3390/app14156754',
  },
  {
    id: 3,
    accessibleTitle: 'Do desenho ao voo: construindo um motor para pesquisa',
    source: 'BENINI, E.; GIACOMETTI, S. (2007)',
    journal: 'Applied Energy, v.84, n.12, p.1102–1116',
    color: '#22c55e',
    icon: <Wrench size={22} color="#22c55e" />,
    tags: ['Projeto', 'Fabricação', 'Teste Experimental'],
    summary: 'Um grupo de pesquisadores projetou, fabricou e testou um motor turbojato de pequeno porte para uso educacional. O projeto mostrou que é possível criar motores funcionais para fins de pesquisa com custo acessível.',
    whatItMeans: 'Este estudo clássico documentou todo o ciclo de desenvolvimento de um turbojato experimental — desde os cálculos termodinâmicos iniciais até os testes em bancada. Os pesquisadores mediram a performance obtida e compararam com a prevista por teoria. O trabalho serve como referência para projetos similares em universidades, demonstrando que a fabricação de um turbojato funcional está ao alcance de equipes de pesquisa com orçamento limitado.',
    keyFinding: 'Turbojatos de pesquisa podem ser projetados e testados por equipes universitárias com orçamento acessível.',
    relevance: 'Histórica',
    year: 2007,
    url: 'https://doi.org/10.1016/j.apenergy.2007.02.002',
  },
]

function RelevanceBadge({ level }) {
  const colors = { Alta: '#22c55e', Histórica: '#f97316', Média: '#3b82f6' }
  const color = colors[level] || '#64748b'
  return (
    <span style={{
      padding: '0.2rem 0.6rem',
      backgroundColor: `${color}12`,
      border: `1px solid ${color}30`,
      borderRadius: '100px',
      fontSize: '0.72rem',
      color,
      fontWeight: 600,
    }}>
      Relevância {level}
    </span>
  )
}

function ArticleCard({ article, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        backgroundColor: '#1e293b',
        border: `1px solid rgba(255,255,255,0.07)`,
        borderRadius: '18px',
        overflow: 'hidden',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = article.color + '40'
        e.currentTarget.style.boxShadow = `0 8px 40px ${article.color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Color top bar */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${article.color}, ${article.color}80)` }} />

      <div style={{ padding: '1.75rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '48px', height: '48px',
            backgroundColor: `${article.color}12`,
            border: `1px solid ${article.color}25`,
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {article.icon}
          </div>

          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
              <span style={{ color: article.color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                Artigo #{article.id} · {article.year}
              </span>
              <RelevanceBadge level={article.relevance} />
            </div>
            <h3 style={{ color: '#f1f5f9', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '0.25rem' }}>
              {article.accessibleTitle}
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.82rem', fontStyle: 'italic' }}>
              {article.source} — {article.journal}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
          {article.tags.map(tag => (
            <span key={tag} style={{
              padding: '0.25rem 0.65rem',
              backgroundColor: `${article.color}08`,
              border: `1px solid ${article.color}20`,
              borderRadius: '100px',
              fontSize: '0.75rem',
              color: article.color,
              fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>

        {/* Summary */}
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderLeft: `3px solid ${article.color}`,
          borderRadius: '0 8px 8px 0',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
        }}>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {article.summary}
          </p>
        </div>

        {/* Key finding */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start',
          padding: '0.875rem 1rem',
          backgroundColor: `${article.color}08`,
          borderRadius: '10px',
          marginBottom: '1rem',
        }}>
          <Lightbulb size={16} color={article.color} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span style={{ color: article.color, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
              Descoberta principal
            </span>
            <span style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>
              {article.keyFinding}
            </span>
          </div>
        </div>

        {/* Article link + expand/collapse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.875rem',
              backgroundColor: `${article.color}10`,
              border: `1px solid ${article.color}30`,
              borderRadius: '8px',
              fontSize: '0.82rem',
              color: article.color,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${article.color}20` }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = `${article.color}10` }}
          >
            <ExternalLink size={13} />
            Buscar artigo
          </a>

        {/* Expand/collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 500,
            padding: '0',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = article.color}
          onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? 'Recolher detalhes' : 'Ver o que isso significa na prática'}
        </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                marginTop: '1rem',
                padding: '1.25rem',
                backgroundColor: 'rgba(0,0,0,0.15)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <h4 style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Na prática, isso significa:
                </h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  {article.whatItMeans}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Modulo3() {
  return (
    <main style={{ minHeight: 'calc(100vh - 64px)', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '8px',
            padding: '0.25rem 0.75rem',
            fontSize: '0.8rem',
            color: '#4ade80',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            MÓDULO 03
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            O que diz a ciência?
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '650px', lineHeight: 1.7 }}>
            Artigos científicos sobre propulsão, adaptados para linguagem acessível.
            Cada card apresenta o resumo e o que aquela descoberta significa na prática.
          </p>
        </motion.div>

        {/* Articles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#1e293b',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '18px',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '44px', height: '44px',
              backgroundColor: 'rgba(59,130,246,0.1)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <ExternalLink size={20} color="#3b82f6" />
            </div>
            <div>
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                Sobre a curadoria científica
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>
                Os artigos apresentados foram selecionados por relevância, acessibilidade e impacto para
                o ensino de propulsão aeronáutica. Os resumos foram adaptados para linguagem acessível.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {[
                  { label: 'DergiPark', url: 'https://dergipark.org.tr/en/download/article-file/1796154' },
                  { label: 'MDPI Applied Sciences', url: 'https://doi.org/10.3390/app14156754' },
                  { label: 'Elsevier Applied Energy', url: 'https://doi.org/10.1016/j.apenergy.2007.05.006' },
                ].map(source => (
                  <a
                    key={source.label}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: 'rgba(59,130,246,0.08)',
                      border: '1px solid rgba(59,130,246,0.2)',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      color: '#60a5fa',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.18)' }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.08)' }}
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Referências Bibliográficas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#1e293b',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '18px',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '44px', height: '44px',
              backgroundColor: 'rgba(168,85,247,0.1)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <BookOpen size={20} color="#a855f7" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem' }}>
                Referências Bibliográficas
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  {
                    citation: 'MORAN, M. J.; SHAPIRO, H. N.',
                    title: 'Princípios de Termodinâmica para Engenharia',
                    note: 'Referência clássica para termodinâmica aplicada e ciclos de potência',
                    url: 'https://www.grupogen.com.br/principios-de-termodinamica-para-engenharia',
                  },
                  {
                    citation: 'HEWITT, Paul G.',
                    title: 'Física Conceitual',
                    note: 'Interpretação conceitual da física sem formalismo matemático excessivo',
                    url: 'https://books.google.com.br/books/about/F%C3%ADsica_Conceitual.html?id=UBWwEAAAQBAJ',
                  },
                  {
                    citation: 'NASA Glenn Research Center',
                    title: "Beginner's Guide to Aeronautics",
                    note: 'Material didático internacional sobre propulsão aeronáutica',
                    url: 'https://www.grc.nasa.gov/www/k-12/airplane/guided.htm',
                  },
                  {
                    citation: 'BUENO, W. C. (2010)',
                    title: 'Comunicação científica e divulgação científica: aproximações e rupturas conceituais',
                    note: 'Informação & Informação, v.15, n.esp.',
                    url: 'https://doi.org/10.5433/1981-8920.2010v15n1espp1',
                  },
                ].map((ref, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{
                      width: '28px', height: '28px',
                      backgroundColor: 'rgba(168,85,247,0.1)',
                      border: '1px solid rgba(168,85,247,0.2)',
                      borderRadius: '6px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '0.75rem',
                      color: '#a855f7',
                      fontWeight: 700,
                    }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                        <span style={{ color: '#94a3b8' }}>{ref.citation}</span>
                        {' '}<em style={{ color: '#f1f5f9', fontStyle: 'italic' }}>{ref.title}</em>
                      </p>
                      <p style={{ color: '#475569', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                        {ref.note}
                      </p>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.78rem',
                          color: '#a855f7',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                      >
                        <ExternalLink size={12} />
                        Acessar referência
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
