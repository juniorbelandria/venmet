# 📐 VENMET — README de Diseño & Contenido
### Venezolana de Metrología C.A. | Landing Page Completa v3.0

> Documento de referencia completo para el desarrollo, mantenimiento y actualización de la landing page de VENMET. Incluye paleta de colores, tipografía, estructura de secciones, todos los textos y guía de componentes.

---

## 📋 ÍNDICE

1. [Identidad Visual](#1-identidad-visual)
2. [Tipografía](#2-tipografía)
3. [Sistema de Espaciado y Layout](#3-sistema-de-espaciado-y-layout)
4. [Estructura de Secciones](#4-estructura-de-secciones)
5. [Contenido Completo por Sección](#5-contenido-completo-por-sección)
6. [Componentes Reutilizables](#6-componentes-reutilizables)
7. [Animaciones e Interacciones](#7-animaciones-e-interacciones)
8. [SEO & Metadatos](#8-seo--metadatos)
9. [Datos de Contacto](#9-datos-de-contacto)

---

## 1. IDENTIDAD VISUAL

### 🎨 Paleta de Colores Principal

| Nombre | Variable CSS | HEX | Uso |
|---|---|---|---|
| **Azul Profundo** | `--azul` | `#0B1F3A` | Fondo hero, navbar, fondos oscuros, cards destacados |
| **Azul Medio** | `--azul-medio` | `#173560` | Gradientes, fondos secundarios oscuros |
| **Verde Acento** | `--acento` | `#00C9A7` | CTA principal, highlights, bordes activos, iconos |
| **Ámbar Acento** | `--acento2` | `#FFB347` | Elementos secundarios, visión, estrellas de rating |
| **Blanco Suave** | `--blanco` | `#F5F7FA` | Fondo general de la página |
| **Gris Texto** | `--gris` | `#8A96A8` | Texto secundario, subtítulos, placeholders |
| **Gris Claro** | `--gris-claro` | `#EEF1F6` | Fondos de secciones alternadas, cards, separadores |
| **Texto Principal** | `--texto` | `#1A2B42` | Cuerpo de texto, párrafos principales |
| **Rojo Suave** | `--rojo-suave` | `#FF6B6B` | Estados de error, checklist negativo, "antes" |

### 🎨 Colores de Certificaciones (uso específico)

| Certificación | Color | HEX | Uso |
|---|---|---|---|
| ISO/IEC 17025 | Azul institucional | `#0052B4` | Badge ISO, borde inferior card, label |
| COVENIN | Rojo venezolano | `#CF1020` | Badge COVENIN, borde inferior card |
| SENCAMER | Naranja | `#F5A623` / `#D4860A` | Badge SENCAMER, borde inferior card |
| BPF/BPA/BPL | Verde acento | `#00C9A7` | Badge BPF, borde inferior card |

### 🎨 Colores de Servicios (iconos de tarjetas)

| Servicio | Color fondo icono | HEX |
|---|---|---|
| Temperatura y Humedad | Verde acento suave | `rgba(0,201,167,0.10)` |
| Temperatura | Ámbar suave | `rgba(255,200,100,0.12)` |
| Masa | Naranja suave | `rgba(255,179,71,0.10)` |
| Volumen | Azul claro suave | `rgba(100,180,255,0.12)` |
| Presión | Rojo suave | `rgba(255,107,107,0.10)` |
| Tiempo | Verde acento muy suave | `rgba(0,201,167,0.08)` |
| Dimensional | Azul oscuro suave | `rgba(23,53,96,0.08)` |
| Físico-Químico | Púrpura suave | `rgba(108,99,255,0.10)` |

### 🎨 Colores de la Sección Certificaciones (fondos de icono circular)

| Cert | Fondo | Borde |
|---|---|---|
| ISO | `rgba(0,82,180,0.08)` | `rgba(0,82,180,0.18)` |
| COVENIN | `rgba(207,16,32,0.08)` | `rgba(207,16,32,0.18)` |
| SENCAMER | `rgba(245,166,35,0.08)` | `rgba(245,166,35,0.18)` |
| BPF | `rgba(0,201,167,0.08)` | `rgba(0,201,167,0.18)` |

### 🎨 Colores de Estados Antes/Después

| Estado | Fondo | Borde | Texto label |
|---|---|---|---|
| ❌ Antes | `rgba(255,107,107,0.10)` | `rgba(255,107,107,0.20)` | `#FF6B6B` |
| ✓ Con VENMET | `rgba(0,201,167,0.10)` | `rgba(0,201,167,0.20)` | `#00C9A7` |

---

## 2. TIPOGRAFÍA

### Fuentes utilizadas (Google Fonts)

```
https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap
```

| Fuente | Familia | Pesos | Uso |
|---|---|---|---|
| **Syne** | Display / Sans | 400, 600, 700, 800 | Todos los títulos H1-H4, navbar logo, botones CTA, badges, labels de tabla |
| **DM Sans** | Body / Sans | 300, 400, 500, 300 italic | Todo el cuerpo de texto, párrafos, formularios, subtítulos |

### Jerarquía tipográfica

| Elemento | Fuente | Peso | Tamaño | Uso |
|---|---|---|---|---|
| H1 Hero | Syne | 800 | `clamp(36px, 4vw, 58px)` | Título principal del hero |
| H2 Sección | Syne | 800 | `clamp(28px, 3.5vw, 46px)` | Títulos de cada sección |
| H3 Card | Syne | 700 | `18–20px` | Títulos de tarjetas de servicio |
| H4 FAQ | Syne | 600 | `16px` | Preguntas del acordeón |
| Tag Label | Syne | 700 | `11px` | Etiquetas superiores de sección (MAYÚSCULAS, spacing 2px) |
| Cuerpo | DM Sans | 400 | `14–17px` | Párrafos descriptivos |
| Cuerpo grande | DM Sans | 300 | `17–18px` | Subtítulos del hero |
| Micro | DM Sans | 400 | `12–13px` | Bullets de servicios, notas pequeñas |
| Botones | Syne | 700–800 | `13–16px` | Todos los CTA y botones |

### Color de textos

| Contexto | Color | Hex |
|---|---|---|
| Texto sobre fondo claro (principal) | `--texto` | `#1A2B42` |
| Texto secundario sobre fondo claro | `--gris` | `#8A96A8` |
| Texto cuerpo interno cards | — | `#3A4D63` |
| Título sobre fondo oscuro | Blanco puro | `#FFFFFF` |
| Subtítulo sobre fondo oscuro | Blanco 55–65% | `rgba(255,255,255,0.55–0.65)` |
| Micro sobre fondo oscuro | Blanco 40% | `rgba(255,255,255,0.40)` |
| Acento en títulos | `--acento` | `#00C9A7` |

---

## 3. SISTEMA DE ESPACIADO Y LAYOUT

### Padding de secciones

| Tipo de sección | Padding vertical | Padding horizontal |
|---|---|---|
| Secciones principales | `90px` top/bottom | `5%` left/right |
| Stats bar | `70px` top/bottom | `5%` |
| Trust bar | `28px` top/bottom | `5%` |
| Navbar | altura fija `70px` | `5%` |
| Footer | `60px` top, `30px` bottom | `5%` |

### Ancho máximo de contenido

| Elemento | Max-width |
|---|---|
| Contenido de secciones generales | `1100px` |
| FAQ list | `740px` |
| Formulario de solicitud | `900px` |
| Stats grid | `1000px` |
| Textos de título centrados | `580–700px` |
| Subtítulos centrados | `580–640px` |

### Grid systems

| Sección | Columnas desktop | Columnas tablet | Columnas mobile |
|---|---|---|---|
| Hero | `1fr 1fr` | `1fr` | `1fr` |
| Pilares de valor | `repeat(3, 1fr)` | `1fr 1fr` | `1fr` |
| Proceso | `repeat(4, 1fr)` | `1fr 1fr` | `1fr 1fr` |
| Servicios | `repeat(3, 1fr)` | `1fr 1fr` | `1fr` |
| Stats | `repeat(4, 1fr)` | `1fr 1fr` | `1fr 1fr` |
| Testimonios | `repeat(3, 1fr)` | `1fr` | `1fr` |
| Beneficios | `repeat(2, 1fr)` | `1fr` | `1fr` |
| Certificaciones | `repeat(4, 1fr)` | `1fr 1fr` | `1fr` |
| Misión/Visión/Política | `repeat(3, 1fr)` | `1fr` | `1fr` |
| Footer | `2fr 1fr 1fr 1.5fr` | `1fr 1fr` | `1fr` |
| Formulario empresa | `1fr 1fr` | `1fr 1fr` | `1fr` |

### Border radius

| Elemento | Radio |
|---|---|
| Cards principales | `16–20px` |
| Botones CTA | `8–12px` |
| Iconos de sección | `12px` |
| Inputs del formulario | `10px` |
| Tabla de equipos | `12px` |
| Badges (pill) | `100px` |
| Hero mockup | `20px` |
| Exit popup modal | `24px` |

---

## 4. ESTRUCTURA DE SECCIONES

### Orden completo de la página (top → bottom)

```
┌──────────────────────────────────────────────────┐
│  00 · NAVBAR (fija)                              │
├──────────────────────────────────────────────────┤
│  00b · MOBILE MENU (desplegable)                 │
├──────────────────────────────────────────────────┤
│  01 · HERO                          id="inicio"  │
├──────────────────────────────────────────────────┤
│  02 · TRUST BAR (logos de sectores)              │
├──────────────────────────────────────────────────┤
│  03 · EL PROBLEMA                               │
├──────────────────────────────────────────────────┤
│  04 · NOSOTROS / SOLUCIÓN          id="nosotros" │
├──────────────────────────────────────────────────┤
│  05 · CÓMO FUNCIONA (proceso)       id="proceso" │
├──────────────────────────────────────────────────┤
│  06 · SERVICIOS                   id="servicios" │
├──────────────────────────────────────────────────┤
│  07 · STATS BAR (métricas animadas)              │
├──────────────────────────────────────────────────┤
│  08 · BENEFICIOS ANTES/DESPUÉS                   │
├──────────────────────────────────────────────────┤
│  09 · TESTIMONIOS                id="testimonios"│
├──────────────────────────────────────────────────┤
│  10 · ¿POR QUÉ ELEGIRNOS? (tabla comparativa)   │
├──────────────────────────────────────────────────┤
│  11 · CERTIFICACIONES Y NORMAS                   │
├──────────────────────────────────────────────────┤
│  12 · FAQ (acordeón)                   id="faq"  │
├──────────────────────────────────────────────────┤
│  13 · CTA FINAL                   id="contacto"  │
├──────────────────────────────────────────────────┤
│  14 · FORMULARIO SOLICITUD        id="solicitud" │
├──────────────────────────────────────────────────┤
│  15 · FOOTER                                     │
├──────────────────────────────────────────────────┤
│  16 · EXIT POPUP (overlay)                       │
├──────────────────────────────────────────────────┤
│  17 · BOTÓN FLOTANTE WHATSAPP                    │
└──────────────────────────────────────────────────┘
```

### Colores de fondo por sección

| # | Sección | Fondo |
|---|---|---|
| 00 | Navbar | `rgba(11,31,58,0.97)` con blur |
| 01 | Hero | `#0B1F3A` (azul profundo) |
| 02 | Trust Bar | `#FFFFFF` |
| 03 | Problema | `#EEF1F6` (gris claro) |
| 04 | Nosotros | `#FFFFFF` |
| 05 | Proceso | `#0B1F3A` (azul profundo) |
| 06 | Servicios | `#EEF1F6` (gris claro) |
| 07 | Stats Bar | `#00C9A7` (verde acento) |
| 08 | Beneficios | `#0B1F3A` (azul profundo) |
| 09 | Testimonios | `#FFFFFF` |
| 10 | ¿Por qué VENMET? | `#EEF1F6` (gris claro) |
| 11 | Certificaciones | `#FFFFFF` |
| 12 | FAQ | `#FFFFFF` |
| 13 | CTA Final | `#0B1F3A` (azul profundo) |
| 14 | Formulario | `#EEF1F6` (gris claro) |
| 15 | Footer | `#060F1E` (azul muy oscuro) |

> **Patrón alternado:** Las secciones alternan entre fondos blancos/grises claros y fondos azul oscuro, creando ritmo visual y evitando monotonía.

---

## 5. CONTENIDO COMPLETO POR SECCIÓN

---

### SECCIÓN 00 — NAVBAR

**Fondo:** `rgba(11,31,58,0.97)` + `backdrop-filter: blur(12px)`
**Borde inferior:** `1px solid rgba(0,201,167,0.15)`
**Altura:** `70px` — Posición: `fixed`

#### Logo
- Ícono cuadrado `38×38px`, fondo `#00C9A7`, borde-radio `8px`
- Texto del ícono: `VM` — fuente Syne 800, `15px`, color `#0B1F3A`
- Nombre: `VEN` (blanco) + `MET` (verde `#00C9A7`) — Syne 700, `18px`, letra-spacing `1px`

#### Links de navegación (desktop)
```
Inicio        → #inicio
Servicios     → #servicios
Nosotros      → #nosotros
Cómo Funciona → #proceso
Clientes      → #testimonios
```

#### CTA Navbar
```
[Solicitar Servicio]  → #solicitud
```
- Fondo: `#00C9A7` | Texto: `#0B1F3A` | Peso: 700
- Hover: `translateY(-2px)` + sombra verde

#### Mobile hamburger
- 3 barras blancas `24×2px`
- Animación a X al abrir menú

---

### SECCIÓN 01 — HERO

**Fondo:** `#0B1F3A` + cuadrícula sutil + gradiente radial acento esquina superior derecha
**Padding:** `100px 5% 60px`

#### Badge superior
```
● Laboratorio Certificado · Venezuela
```
- Fondo: `rgba(0,201,167,0.12)` | Borde: `rgba(0,201,167,0.3)`
- Punto pulsante animado `#00C9A7`

#### Headline principal (H1)
```
Tus mediciones exactas,
tu empresa sin
riesgo de auditoría
```
- Fuente: Syne 800 | `clamp(36px, 4vw, 58px)` | Line-height: 1.1
- Color: `#FFFFFF` | "exactas" en `#00C9A7`

#### Subtítulo
```
Calibramos y certificamos tus instrumentos bajo normas ISO y COVENIN
para que pases cualquier inspección sin rechazos, sin multas
y sin parar tu producción.
```
- DM Sans 300, `18px`, `rgba(255,255,255,0.65)`

#### Microcopy
```
✓ Sin contratos complicados — resultados entregados en tiempo récord
```
- DM Sans 400, `13px`, `rgba(255,255,255,0.40)`

#### CTAs
```
[📋 Solicitar Cotización Gratis]   → https://wa.me/584242049381
[Ver Servicios ↓]                  → #servicios
```
- Primario: fondo `#00C9A7`, texto `#0B1F3A`, Syne 700, `15px`, padding `16×32px`
- Secundario: borde `rgba(255,255,255,0.25)`, texto blanco

#### Mockup visual (lado derecho)
Card flotante con:
- Header con 3 puntos de color (rojo/amarillo/verde) + título `CERTIFICADO DE CALIBRACIÓN`
- 4 items animados (slideIn con delays escalonados):
  1. 🌡️ `Termómetro Digital — Lab. Control` → `✓ Calibrado — Norma COVENIN 1335`
  2. ⚖️ `Balanza Analítica — Farmacéutica` → `✓ Calibrado — ISO/IEC 17025`
  3. 📊 `Manómetro — Planta Química` → `✓ Calibrado — Trazabilidad SENCAMER`
  4. ⏱️ `Cronómetro — Control de Proceso` → `✓ Calibrado — Dentro de especificaciones`
- Footer con 3 métricas: `+20 Años` | `500+ Clientes` | `6 Magnitudes`

---

### SECCIÓN 02 — TRUST BAR

**Fondo:** `#FFFFFF` | **Borde inferior:** `1px solid #EEF1F6`

#### Label
```
Confían en Nosotros
```

#### Items de sectores
```
🏭 Industria Farmacéutica
🍽️ Sector Alimentario
⚗️ Industria Química
🏗️ Manufactura
🔬 Laboratorios Clínicos
🏥 Sector Salud
```

---

### SECCIÓN 03 — EL PROBLEMA

**Fondo:** `#EEF1F6` | **ID:** (sin id específico)

#### Tag label
```
El Problema Real
```

#### Título H2
```
¿Cuánto te cuesta un instrumento
fuera de calibración?
```

#### Subtítulo
```
Más de lo que imaginas. Un solo error de medición puede paralizar tu producción,
generar rechazos en auditoría y costarte caro en pérdidas de lote y reputación.
```

#### Párrafo 1 (agitación)
```
En Venezuela, las industrias farmacéutica, alimentaria y química están sujetas a
inspecciones rigurosas de SENCAMER, el MPPS y auditorías ISO. Un solo instrumento
descalibrado puede ser el motivo de rechazo de un lote completo o la suspensión de
tu línea de producción.
```

#### Párrafo 2 (consecuencia)
```
El problema es que la mayoría de las empresas solo descubren que sus equipos están
fuera de especificación cuando ya es demasiado tarde: en medio de una auditoría,
con producción detenida y pérdidas económicas acumulándose por hora.
```

#### Frase puente (banner oscuro)
```
La buena noticia: este riesgo se elimina por completo con un plan de calibración
periódica. Nosotros te lo hacemos fácil, rápido y con certificado que respalda
cada resultado.
```
- Fondo: gradiente `#0B1F3A → #173560` | Texto blanco | "este riesgo se elimina por completo" en `#00C9A7`

#### Checklist "¿Te ha pasado alguna de estas?" (6 ítems)
```
✗  Fallaste una auditoría porque no tenías los certificados de calibración al día
✗  Tuviste que repetir un proceso entero porque los datos de temperatura no eran confiables
✗  No sabes cuándo fue la última vez que calibraron tus balanzas o manómetros
✗  Buscaste un servicio de calibración y no te dieron certeza de los plazos de entrega
✗  Tu laboratorio no tiene trazabilidad documentada para respaldar sus mediciones
✗  Perdiste un cliente o contrato por no tener la certificación que exigían
```
- Ícono ✗: círculo `20px`, fondo `#FFF0F0`, borde `#FFCECE`, color `#FF6B6B`

---

### SECCIÓN 04 — NOSOTROS

**Fondo:** `#FFFFFF` | **ID:** `nosotros`

#### Tag label
```
Quiénes Somos
```

#### Título H2
```
Más de 20 años siendo el respaldo técnico
de la industria venezolana
```

#### Párrafo intro
```
En Venezolana de Metrología C.A. brindamos a la industria un servicio de calibración
y verificación para instrumentos de medición establecidos en nuestro alcance, ofreciendo
un servicio de calidad a la altura de las necesidades del mercado nacional, aplicando
las normas nacionales e internacionales vigentes.
```

#### Tarjeta MISIÓN
- **Borde superior:** `4px solid #00C9A7`
- **Ícono:** 🎯 sobre fondo `#0B1F3A`
- **Título:** `Misión`
- **Texto:**
```
Ser una empresa sólida, con capacidades técnicas y un excelente grupo de trabajo que
brinda soluciones metrológicas que se adaptan a las exigencias de un mercado creciente
y competitivo.
```

#### Tarjeta VISIÓN
- **Fondo:** `#0B1F3A` | **Borde superior:** `4px solid #FFB347`
- **Ícono:** 🔭 sobre fondo `rgba(255,179,71,0.15)`
- **Título:** `Visión` (color blanco)
- **Texto:**
```
Afianzarnos como un laboratorio de calibración de referencia con amplio alcance, que
demuestre competencia técnica, genere resultados confiables y cumpla con los requisitos
de la norma ISO/IEC 17025 y la satisfacción plena del cliente.
```

#### Tarjeta POLÍTICA DE CALIDAD
- **Borde superior:** `4px solid #6C63FF`
- **Ícono:** 📋 sobre fondo `#0B1F3A`
- **Título:** `Política de Calidad`
- **Texto:**
```
VENMET C.A. está comprometido en satisfacer las necesidades de los clientes, asegurando
la confiabilidad y entrega oportuna de los resultados, soportados con equipos de vanguardia
y personal altamente capacitado, mediante la implantación y mejora continua del sistema de
gestión bajo la norma ISO/IEC 17025.
```

#### 3 Pilares de Valor (cards sobre fondo gris claro)

| Ícono | Título | Descripción |
|---|---|---|
| 🎯 | Exactitud Garantizada | Cada calibración genera un certificado con trazabilidad documentada a patrones nacionales e internacionales, válido ante cualquier auditoría o ente regulador venezolano. |
| ⚡ | Entrega Oportuna | Tu producción no puede esperar. Confirmamos plazos de entrega antes de iniciar para que planifiques sin sorpresas. Cumplimos lo que prometemos. |
| 🏛️ | Normas Actualizadas | Aplicamos normas COVENIN, ISO/IEC 17025 y regulaciones SENCAMER vigentes. Personal familiarizado con los procedimientos y políticas del laboratorio. |

#### Barra de datos de contacto (fondo azul oscuro)
```
📍 Ubicación:   Urb. El Marqués, Miranda, Caracas, Venezuela
📞 Contáctanos: +58 0424-204.93.81 / +58 212-715.70.60
🌐 Web:         www.venmet.com.ve
[Solicitar Servicio →]  → #solicitud
```

---

### SECCIÓN 05 — CÓMO FUNCIONA

**Fondo:** `#0B1F3A` + cuadrícula sutil | **ID:** `proceso`

#### Tag label
```
Cómo Funciona
```

#### Título H2
```
De la solicitud al certificado
en 4 pasos simples
```

#### Subtítulo
```
Sin burocracia, sin complicaciones. Así de fácil trabajamos contigo.
```

#### 4 Pasos (números en círculo verde `#00C9A7`)

| N° | Título | Descripción |
|---|---|---|
| **1** | Solicita tu Cotización | Contáctanos por WhatsApp o teléfono. Cuéntanos qué equipos necesitas calibrar y en qué plazo. En menos de 24h tienes tu presupuesto. |
| **2** | Enviamos o Recibimos | Puedes traer tus instrumentos a nuestro laboratorio en El Marqués o coordinar la visita de nuestro equipo técnico a tu empresa. |
| **3** | Calibramos y Verificamos | Nuestros técnicos certificados realizan la calibración bajo norma específica para cada tipo de instrumento y magnitud. Trazabilidad total. |
| **4** | Recibes tu Certificado | Te entregamos el certificado oficial de calibración listo para usar en auditorías, sistemas de gestión y registros de calidad. |

#### Nota al pie
```
Sin contratos largos. Sin letra pequeña. Solo resultados que puedes presentar con confianza.
```
- "Solo resultados que puedes presentar con confianza." en `#00C9A7`

---

### SECCIÓN 06 — SERVICIOS

**Fondo:** `#EEF1F6` | **ID:** `servicios`

#### Tag label
```
Nuestros Servicios
```

#### Título H2
```
Calibración en las 7 magnitudes
críticas de la industria
```

#### Subtítulo
```
Cubrimos todas las magnitudes físicas que tu operación necesita certificar,
bajo un solo proveedor de confianza.
```

#### 7 Tarjetas de Servicio

**1. Temperatura y Humedad** *(badge "Más Solicitado")*
```
Monitoreamos y certificamos condiciones ambientales críticas para industrias
farmacéutica, alimentaria y de salud. Control completo de ambientes regulados.

→ Dataloggers y termohigrómetros
→ Cámaras climáticas y cuartos fríos
→ Monitoreo de almacenes y depósitos
→ Verificación de condiciones BPF/BPA

[Solicitar servicio →]
```

**2. Temperatura**
```
Garantizamos que todos tus sensores y sistemas térmicos registren temperaturas
reales y confiables para cumplir con normas de proceso y calidad.

→ Termómetros de líquido en vidrio
→ Estufas, incubadoras y baños térmicos
→ Neveras, congeladores y disolutores
→ Controladores e indicadores de temperatura

[Solicitar servicio →]
```

**3. Masa**
```
Tus balanzas son críticas para el control de proceso y calidad. Las calibramos
para que cada pesaje sea confiable y trazable al Sistema Internacional.

→ Balanzas analíticas de precisión
→ Balanzas semianalíticas
→ Balanzas industriales y de plataforma
→ Certificación para uso farmacéutico y alimentario

[Solicitar servicio →]
```

**4. Volumen**
```
El material volumétrico de tu laboratorio debe ser exacto. Garantizamos que cada
medida sea confiable para tus análisis y formulaciones.

→ Buretas y pipetas aforadas
→ Cilindros graduados
→ Balones y matraces aforados
→ Material de vidrio clase A y B

[Solicitar servicio →]
```

**5. Presión**
```
Evita accidentes y paros de producción. Calibramos manómetros, presostatos y
válvulas de seguridad bajo normas estrictas de trazabilidad.

→ Manómetros analógicos y digitales
→ Presostatos y transmisores
→ Válvulas de seguridad
→ Registradores e indicadores de presión

[Solicitar servicio →]
```

**6. Tiempo**
```
Un cronómetro descalibrado puede significar un lote fallado. Verificamos la
exactitud de tus instrumentos de tiempo para procesos críticos.

→ Cronómetros de laboratorio
→ Temporizadores de proceso
→ Friabilizadores
→ Instrumentos de control de ciclos

[Solicitar servicio →]
```

**7. Dimensional**
```
La exactitud en mediciones dimensionales es esencial en manufactura e ingeniería.
Trazabilidad documentada para cada instrumento de tu taller o laboratorio.

→ Vernier / Calibres pie de rey
→ Micrómetros exteriores e interiores
→ Medidores de profundidad
→ Tipómetros y galgas

[Solicitar servicio →]
```

**8. Físico-Químico** *(ocupa 2 columnas)*
```
Calibración de instrumentos de análisis físico-químico para laboratorios de control
de calidad, investigación y procesos industriales que requieren trazabilidad de
parámetros analíticos.

→ pH-metros y electroanalizadores    → Refractómetros
→ Conductivímetros                   → Instrumentos de análisis de proceso
→ Equipos de medición analítica      → Instrumentos de laboratorio especializado

[Solicitar servicio →]
```

---

### SECCIÓN 07 — STATS BAR

**Fondo:** `#00C9A7` (verde acento sólido)
**Números:** Syne 800, `clamp(36px, 4vw, 56px)`, color `#0B1F3A`
**Labels:** DM Sans 600, `13px`, `rgba(11,31,58,0.65)`

#### 4 métricas (animadas al entrar al viewport)

| Número | Label |
|---|---|
| `+20` | Años de Experiencia |
| `+500` | Empresas Atendidas |
| `7` | Magnitudes Físicas |
| `100%` | Trazabilidad Garantizada |

> **Animación:** Contador desde 0 hasta el valor final con `ease-out cubic` durante 1200–2200ms

---

### SECCIÓN 08 — BENEFICIOS ANTES/DESPUÉS

**Fondo:** `#0B1F3A` + cuadrícula sutil

#### Tag label
```
Beneficios Reales
```

#### Título H2
```
Lo que cambia en tu empresa cuando
trabajas con VENMET
```

#### Subtítulo
```
Cada servicio tiene un impacto directo en tu operación, tu rentabilidad y tu tranquilidad.
```

#### 4 Tarjetas de Beneficio

**1. 🛡️ Auditorías sin sorpresas**
```
Descripción: Pasa cualquier inspección ISO, MPPS o SENCAMER con todos tus certificados
al día y la documentación lista para presentar.

❌ ANTES                           ✓ CON VENMET
Auditoría suspendida por          Auditoría aprobada.
equipos sin certificar.           Cero observaciones en
No conformidades críticas.        metrología. Operación
Producción paralizada.            continua sin interrupciones.
```

**2. 💰 Cero pérdidas por medición incorrecta**
```
Descripción: Un solo lote rechazado por datos de temperatura o peso fuera de rango puede
costar más que un año de calibraciones.

❌ ANTES                           ✓ CON VENMET
Lotes rechazados. Reprocesos      Datos de proceso confiables.
costosos. Clientes                Decisiones seguras. Cero
insatisfechos. Pérdidas           rechazos atribuibles a errores
difíciles de rastrear.            de medición.
```

**3. ⏱️ Plazos que puedes planificar**
```
Descripción: Confirmamos fechas antes de iniciar. Tu mantenimiento preventivo no depende
de la incertidumbre del proveedor.

❌ ANTES                           ✓ CON VENMET
Proveedor sin plazo definido.     Entrega en el plazo acordado.
Equipos semanas fuera de línea.   Programas de mantenimiento
Planificación imposible.          cumplidos. Sin sorpresas.
```

**4. 📄 Trazabilidad total documentada**
```
Descripción: Cada certificado incluye trazabilidad a patrones nacionales e internacionales,
válida para cualquier sistema de gestión de calidad.

❌ ANTES                           ✓ CON VENMET
Certificados sin trazabilidad.    Trazabilidad documentada
Rechazados en auditorías.         ISO/IEC 17025. Certificados
Sistema de calidad sin            aceptados por cualquier ente
respaldo técnico.                 regulador.
```

---

### SECCIÓN 09 — TESTIMONIOS

**Fondo:** `#FFFFFF` | **ID:** `testimonios`

#### Tag label
```
Lo que dicen nuestros clientes
```

#### Título H2
```
Resultados reales de empresas
como la tuya
```

#### Subtítulo
```
Más de 500 empresas venezolanas confían en VENMET para garantizar
la exactitud de sus procesos.
```

#### 3 Testimonios

**Testimonio 1**
- **Rating:** ★★★★★
- **Badge resultado:** `✓ Auditoría ISO aprobada al 100%`
- **Texto:**
```
"Gracias a VENMET, nuestra última auditoría de BPF fue un éxito total. El inspector revisó
los certificados y no tuvo ni una observación sobre nuestro sistema de medición. Fue la primera
vez en 4 años que pasamos sin ninguna no conformidad."
```
- **Autor:** `MR` | María Rodríguez | Directora de Calidad · Laboratorio Farmacéutico, Caracas

**Testimonio 2**
- **Rating:** ★★★★★
- **Badge resultado:** `✓ Entrega en 3 días, 40 equipos calibrados`
- **Texto:**
```
"Teníamos una auditoría en 5 días y ningún certificado al día. Llamé a VENMET el lunes, el
viernes tenía todos los certificados en mano. Pensé que era imposible. Desde entonces somos
clientes fijos, no arriesgamos más con eso."
```
- **Autor:** `JG` | José Gutiérrez | Gerente de Planta · Empresa Alimentaria, Miranda

**Testimonio 3**
- **Rating:** ★★★★★
- **Badge resultado:** `✓ Reducción de errores de medición en 85%`
- **Texto:**
```
"Después de implementar el plan de calibración periódica con VENMET, nuestros datos de control
de proceso son consistentes y confiables. Eliminamos prácticamente todos los rechazos internos
por desviación de medición. El ROI fue inmediato."
```
- **Autor:** `AL` | Ana López | Jefe de Laboratorio · Industria Química, Carabobo

> **Diseño de avatares:** Círculo `42px`, fondo `#0B1F3A`, iniciales en `#00C9A7`, Syne 700

---

### SECCIÓN 10 — ¿POR QUÉ ELEGIRNOS?

**Fondo:** `#EEF1F6`

#### Tag label
```
¿Por qué elegirnos?
```

#### Título H2
```
VENMET vs. La alternativa
de no calibrar (o hacerlo mal)
```

#### Tabla comparativa

| Criterio | VENMET ✅ | Sin Calibrar / Sin Soporte ❌ |
|---|---|---|
| Certificado válido para auditorías ISO y SENCAMER | ✓ | ✗ |
| Trazabilidad documentada a patrones nacionales | ✓ | ✗ |
| Plazo de entrega definido y cumplido | ✓ | ✗ |
| Servicio en 7 magnitudes físicas bajo un solo proveedor | ✓ | ✗ |
| Más de 20 años de experiencia técnica verificable | ✓ | ✗ |
| Atención directa con técnicos, no con intermediarios | ✓ | ✗ |

- Header tabla: fondo `#0B1F3A`, texto VENMET en `#00C9A7`
- ✓ en `#00C9A7` | ✗ en `#FF6B6B`

---

### SECCIÓN 11 — CERTIFICACIONES Y NORMAS

**Fondo:** `#FFFFFF`

#### Tag label
```
Respaldo Técnico
```

#### Título H2
```
Las normas que aplicamos son
las que tus auditores exigen
```

#### Subtítulo
```
Nuestros certificados son válidos porque están respaldados por los marcos normativos
más rigurosos del sector industrial venezolano e internacional.
```

#### 4 Tarjetas de Certificación

**ISO/IEC 17025** *(color azul `#0052B4`)*
- Ícono: 🌐
- Título: `ISO/IEC 17025`
- Sub-label: `NORMA INTERNACIONAL`
- Descripción:
```
Requisitos generales para la competencia de laboratorios de ensayo y calibración.
El estándar de oro internacional para la validez de certificados metrológicos.
```

**COVENIN** *(color rojo `#CF1020`)*
- Ícono: 🇻🇪
- Título: `COVENIN`
- Sub-label: `NORMAS VENEZOLANAS`
- Descripción:
```
Comisión Venezolana de Normas Industriales. Aplicamos las normas COVENIN específicas
para cada tipo de instrumento y proceso de calibración a nivel nacional.
```

**SENCAMER** *(color naranja `#F5A623`)*
- Ícono: ⚖️
- Título: `SENCAMER`
- Sub-label: `ENTE REGULADOR`
- Descripción:
```
Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos.
Nuestros certificados son reconocidos y aceptados ante este ente regulador.
```

**BPF / BPA / BPL** *(color verde `#00C9A7`)*
- Ícono: 💊
- Título: `BPF / BPA / BPL`
- Sub-label: `BUENAS PRÁCTICAS`
- Descripción:
```
Buenas Prácticas de Fabricación, Almacenamiento y Laboratorio. Calibramos los
instrumentos requeridos para cumplimiento en industria farmacéutica y alimentaria.
```

#### Banner inferior (fondo `#0B1F3A`)
```
Todos nuestros certificados incluyen trazabilidad documentada a patrones nacionales e
internacionales, número de identificación del equipo, incertidumbre de medición, fecha
de calibración y fecha de vencimiento recomendada. Listos para usar en cualquier auditoría.

[Ver cómo aplicarlo →]  → #solicitud
```

---

### SECCIÓN 12 — FAQ

**Fondo:** `#FFFFFF` | **ID:** `faq`
**Comportamiento:** Acordeón — solo 1 ítem abierto a la vez

#### Tag label
```
Preguntas Frecuentes
```

#### Título H2
```
Todo lo que necesitas saber
antes de contactarnos
```

#### 6 Preguntas y Respuestas

**P1: ¿Cuánto tiempo tarda el proceso de calibración?**
```
Depende del tipo y cantidad de instrumentos. Para servicios estándar, el tiempo habitual
es de 2 a 5 días hábiles. Si tienes una auditoría urgente, contáctanos directamente y
evaluamos la posibilidad de un servicio prioritario. Siempre te confirmamos el plazo antes
de comenzar.
```

**P2: ¿El certificado que emiten es válido para auditorías SENCAMER e ISO?**
```
Sí. Nuestros certificados incluyen trazabilidad documentada a patrones nacionales e
internacionales, cumpliendo con los requisitos de ISO/IEC 17025, las normas COVENIN
aplicables y los requerimientos de SENCAMER. Son aceptados por auditores de los principales
entes reguladores venezolanos.
```

**P3: ¿Tienen que llevar los equipos al laboratorio o van a la empresa?**
```
Ambas opciones están disponibles. Puedes traer tus instrumentos a nuestro laboratorio en
El Marqués, Caracas, o coordinar una visita técnica a tus instalaciones. Para grandes
volúmenes de equipos o instrumentos que no pueden moverse (como estufas industriales),
la calibración in-situ es la mejor opción.
```

**P4: ¿Con qué frecuencia debo calibrar mis instrumentos?**
```
La frecuencia depende de la normativa de tu industria, el uso del instrumento y las
exigencias de tu sistema de calidad. La mayoría de las normas exige calibración anual
como mínimo. Algunos instrumentos críticos requieren calibración semestral o trimestral.
Te asesoramos sin costo adicional para definir el plan más adecuado para tu empresa.
```

**P5: ¿Qué pasa si mi equipo está fuera de especificaciones?**
```
Si durante la calibración detectamos que un instrumento está fuera de las tolerancias
aceptables, te notificamos de inmediato con los datos técnicos del desvío. El certificado
indicará la condición encontrada. Así puedes tomar decisiones informadas sobre ajuste,
reparación o retiro del equipo antes de que eso te genere un problema en producción
o auditoría.
```

**P6: ¿Cómo solicito una cotización y qué necesito tener listo?**
```
Es muy sencillo. Contáctanos por WhatsApp al +58 0424-204.93.81 o por teléfono al
+58 212-715.70.60. Para agilizar la cotización, ten a mano el listado de equipos (tipo
de instrumento, marca y modelo si es posible) y el plazo en que los necesitas. En menos
de 24 horas recibes tu presupuesto detallado. ¿Listo para empezar?
```

---

### SECCIÓN 13 — CTA FINAL

**Fondo:** `#0B1F3A` + gradiente radial central | **ID:** `contacto`
**Alineación:** centrado

#### Tag label
```
¿Listo para certificar tu calidad?
```

#### Título H2
```
Tu próxima auditoría
la pasas con confianza
```

#### Subtítulo
```
No esperes a que un inspector encuentre el problema antes que tú. Solicita tu cotización
hoy y en 24 horas sabes exactamente qué necesitas y cuánto cuesta.
```

#### CTAs
```
[📋 Solicitar Cotización Gratis por WhatsApp]  → wa.me/584242049381
[📞 Llamar Ahora]                              → tel:+582127157060
```

#### Garantía
```
🔒 Respuesta garantizada en menos de 24 horas hábiles · Sin compromiso de compra
```

---

### SECCIÓN 14 — FORMULARIO DE SOLICITUD

**Fondo:** `#EEF1F6` | **ID:** `solicitud`

#### Título de sección
```
Tag: Solicite Nuestros Servicios
H2:  Solicitud de Calibración
     de Instrumentos
Sub: Complete el formulario con los datos de su empresa y los equipos a calibrar.
     Nuestro equipo técnico le responderá en menos de 24 horas hábiles con la
     propuesta de servicio.
```

#### Header del formulario (fondo `#0B1F3A`)
```
Formulario de Solicitud de Servicio
Venezolana de Metrología C.A. — VENMET

[24h] Respuesta    [100%] Confiable
```

#### Bloque 1: Datos de la Empresa

| Campo | Tipo | Placeholder |
|---|---|---|
| Código de Cliente | text | `Ej: CLI-0001 (si es cliente nuevo, dejar en blanco)` |
| Razón Social | text (required) | `Nombre completo de la empresa` |
| RIF | text (required) | `J-00000000-0` |
| Persona de Contacto | text (required) | `Nombre y apellido` |
| Teléfono de Contacto | tel (required) | `+58 0424-000.00.00` |
| Correo Electrónico | email (required) | `correo@empresa.com` |

#### Bloque 2: Tabla de Equipos a Calibrar

Columnas de la tabla:
```
MAGNITUD | INSTRUMENTO | CAPACIDAD | UNIDAD | RESOLUCIÓN | CANTIDAD | [✕]
```

Opciones del select de Magnitud:
```
Temperatura y Humedad
Temperatura
Masa
Volumen
Presión
Tiempo
Dimensional
Físico-Químico
```

Botón dinámico: `+ Agregar otro equipo` — borde `2px dashed #C5D0E0`, hover a `#00C9A7`

#### Bloque 3: Comentarios
```
Información adicional, urgencia, requisitos especiales o consultas

Placeholder: "Ej: Necesito los certificados para auditoría el día 15. Los equipos están
ubicados en planta en Valencia. Cualquier duda llamar al contacto indicado..."
```

#### Botón Submit
```
[📋 Enviar Solicitud de Servicio]
```
- Fondo: `#00C9A7` | Texto: `#0B1F3A` | Syne 800, `15px`

#### Mensaje de éxito (post-submit)
```
✅
¡Solicitud enviada con éxito!

Nuestro equipo técnico revisará su solicitud y le contactará en menos de 24 horas
hábiles con la propuesta de servicio.

[💬 También puede contactarnos por WhatsApp]
```

#### Links de contacto alternativo (debajo del formulario)
```
[💬 WhatsApp] +58 0424-204.93.81
[📞 Teléfono] +58 212-715.70.60
```

---

### SECCIÓN 15 — FOOTER

**Fondo:** `#060F1E` (azul muy oscuro)

#### Slogan
```
Tu aliado técnico en metrología industrial. Más de 20 años garantizando que tus
mediciones sean exactas, confiables y certificadas bajo normas internacionales.
```

#### Columna: Servicios
```
Calibración de Temperatura
Calibración de Masa
Calibración de Presión
Calibración de Volumen
Calibración de Tiempo
Calibración de Dimensiones
```

#### Columna: Empresa
```
Quiénes Somos   → #nosotros
Cómo Funciona   → #proceso
Clientes        → #testimonios
Preguntas       → #faq
```

#### Columna: Contacto
```
📍 Urb. El Marqués, Miranda, Caracas, Venezuela
📱 +58 0424-204.93.81
☎️ +58 212-715.70.60
🌐 www.venmet.com.ve
```

#### Footer inferior
```
© 2025 Venezolana de Metrología, C.A. (VENMET) — Todos los derechos reservados
[Política de Privacidad]  [Términos de Servicio]
```

---

### ELEMENTO 16 — EXIT INTENT POPUP

**Trigger:** Mouse sale por `clientY ≤ 5` (desktop) o scroll hacia arriba agresivo desde `Y < 150` (mobile)
**Condición:** Solo si usuario ha hecho scroll `> 400px` y no ha sido cerrado antes (sessionStorage)

#### Header del popup (fondo `#0B1F3A`)
```
⚠️
¿Te vas sin asegurar
tu próxima auditoría?

Miles de empresas venezolanas pierden contratos y enfrentan sanciones cada año
por equipos sin calibrar. No seas una de ellas.
```

#### 6 beneficios en grid (2 columnas)
```
✓ Certificados válidos ante SENCAMER     ✓ Respuesta en menos de 24 horas
✓ Normas ISO/IEC 17025 y COVENIN         ✓ +20 años de experiencia técnica
✓ 7 magnitudes bajo un solo proveedor    ✓ Cotización completamente gratuita
```

#### CTA
```
[📋 Solicitar Cotización Gratis Ahora]
```

#### Dismiss
```
No, prefiero arriesgarme en la próxima auditoría
```
*(copy de rechazo psicológicamente disuasivo)*

---

### ELEMENTO 17 — BOTÓN FLOTANTE WHATSAPP

- **Posición:** `fixed`, bottom `28px`, right `28px`
- **Fondo:** `#25D366` (verde WhatsApp)
- **Sombra:** `0 6px 24px rgba(37,211,102,0.45)`
- **Animación:** bounce suave cada 3s con 2s de delay inicial
- **Tooltip al hover:** `💬 Cotiza por WhatsApp` (fondo `#0B1F3A`)
- **Link:** `https://wa.me/584242049381`

---

## 6. COMPONENTES REUTILIZABLES

### Tag Label (etiqueta superior de sección)
```css
font-size: 11px; font-weight: 700; letter-spacing: 2px;
text-transform: uppercase; color: #00C9A7; margin-bottom: 16px;
display: inline-block;
```

### Botón Primario
```css
background: #00C9A7; color: #0B1F3A;
font-family: 'Syne'; font-weight: 700; font-size: 15px;
padding: 16px 32px; border-radius: 10px;
transition: transform 0.25s, box-shadow 0.25s;
/* Hover: translateY(-3px) + box-shadow 0 12px 35px rgba(0,201,167,0.45) */
```

### Botón Secundario
```css
background: transparent; color: #fff;
border: 1px solid rgba(255,255,255,0.25);
font-family: 'Syne'; font-weight: 600; font-size: 15px;
padding: 16px 28px; border-radius: 10px;
/* Hover: border-color rgba(255,255,255,0.6), bg rgba(255,255,255,0.06) */
```

### Reveal Animation (scroll)
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
/* IntersectionObserver threshold: 0.08, rootMargin: -30px bottom */
```

### Cuadrícula de fondo (secciones oscuras)
```css
background-image:
  linear-gradient(rgba(0,201,167,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,201,167,0.03) 1px, transparent 1px);
background-size: 60px 60px;
```

---

## 7. ANIMACIONES E INTERACCIONES

| Animación | Dónde | Cómo |
|---|---|---|
| `pulse-dot` | Badge hero | Pulso de escala en el punto verde — 2s loop |
| `slideIn` | Items del mockup hero | `translateX(20px → 0)` con delays 0.2s–0.8s |
| `wa-bounce` | Botón WhatsApp | `translateY(0 → -6px → 0)` — 3s loop, 2s delay |
| Scroll Reveal | Todos los `.reveal` | Fade + translateY al entrar en viewport |
| Contador animado | Stats bar | Ease-out cubic de 0 al valor final, 1200–2200ms |
| Hover cards | Servicio, pilares, certs | `translateY(-4px)` + box-shadow |
| Hover tabla | Filas comparativa | Fondo `#EEF1F6` |
| Hover borde inferior | Pilar cards | `scaleX(0 → 1)` — pseudo-elemento bottom |
| FAQ acordeón | Preguntas | `max-height: 0 → 200px` — 0.4s ease |
| FAQ ícono | Toggle + | `rotate(0 → 45deg)` al abrir |
| Hamburger → X | Mobile nav | Spans se transforman en X con rotate |
| Exit popup | Overlay | `opacity 0 → 1` + modal `translateY(28px) scale(0.97) → 0 scale(1)` |
| Form submit | Botón enviar | Texto cambia → "⏳ Enviando..." → formulario oculto → success |

---

## 8. SEO & METADATOS

### Title tag
```
VENMET | Calibración de Instrumentos de Medición Venezuela | ISO/IEC 17025 | COVENIN
```

### Meta description
```
Venezolana de Metrología VENMET C.A. — Laboratorio de calibración certificado ISO/IEC
17025 en Venezuela. Temperatura, Masa, Presión, Volumen, Tiempo, Dimensional y
Físico-Químico. Más de 20 años. Certificados válidos ante SENCAMER. Solicita cotización gratis.
```

### Keywords principales
```
calibración instrumentos Venezuela
laboratorio calibración Caracas
calibración temperatura Venezuela
calibración balanzas Venezuela
certificado calibración ISO 17025
SENCAMER calibración
COVENIN calibración
calibración manómetros Venezuela
calibración termómetros Venezuela
metrología industrial Venezuela
VENMET calibración
```

### Open Graph
```
og:type        = website
og:url         = https://www.venmet.com.ve/
og:title       = VENMET | Calibración de Instrumentos en Venezuela — ISO/IEC 17025
og:description = (misma que meta description)
og:locale      = es_VE
```

### Twitter Card
```
twitter:card  = summary_large_image
twitter:title = VENMET | Calibración de Instrumentos Venezuela
```

### Schema.org (JSON-LD)
```json
{
  "@type": "LocalBusiness",
  "name": "Venezolana de Metrología C.A. — VENMET",
  "telephone": ["+58-424-2049381", "+58-212-7157060"],
  "address": {
    "streetAddress": "Urbanización El Marqués",
    "addressLocality": "Caracas",
    "addressRegion": "Miranda",
    "addressCountry": "VE"
  },
  "geo": { "latitude": 10.4806, "longitude": -66.8792 },
  "openingHours": "Mo-Fr 08:00-17:00"
}
```

---

## 9. DATOS DE CONTACTO

| Campo | Valor |
|---|---|
| **Empresa** | Venezolana de Metrología C.A. |
| **Nombre comercial** | VENMET |
| **RIF** | (completar con dato oficial) |
| **Dirección** | Urbanización El Marqués, Miranda, Caracas, Venezuela |
| **WhatsApp** | +58 0424-204.93.81 |
| **Teléfono** | +58 212-715.70.60 |
| **Web** | www.venmet.com.ve |
| **WhatsApp URL** | `https://wa.me/584242049381` |
| **Coordenadas** | Lat: 10.4806 / Lng: -66.8792 |
| **Horario** | Lunes a Viernes 8:00 AM – 5:00 PM |

---

## 📝 NOTAS DE IMPLEMENTACIÓN

1. **Responsive:** Breakpoints en `900px` y `600px`. En mobile el navbar muestra hamburger y los grids colapsan a 1 columna.
2. **Formulario:** El formulario de solicitud es front-end only. Para funcionalidad real se requiere conectar con backend (EmailJS, Formspree, o endpoint propio).
3. **Imágenes:** La sección "Galería / Fotos del laboratorio" está pendiente. Se recomienda agregar imágenes reales del laboratorio para mayor credibilidad.
4. **WhatsApp link:** El número está hardcodeado como `584242049381`. Verificar que sea correcto antes de publicar.
5. **Google Fonts:** La carga es desde CDN externo. Para producción considerar hostear localmente para mejor performance.
6. **Exit Popup:** Se guarda estado en `sessionStorage` con key `venmet_exit` para no mostrar dos veces en la misma sesión.
7. **Schema.org:** Completar el RIF oficial en los datos estructurados antes de publicar.
8. **Canonical:** Actualizar URL canónica si el dominio final es diferente a `www.venmet.com.ve`.

---

*README generado como documentación completa de diseño y contenido — VENMET Landing Page v3.0*
*Última actualización: 2025*
