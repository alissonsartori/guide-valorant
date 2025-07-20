# Sistema de Design - Valorant Guide

## Visão Geral

Este documento descreve o sistema de design reformulado para o projeto Valorant Guide, criado para ser mais escalável, moderno e fácil de manter.

## Estrutura de Arquivos

```
src/
  styles/
    ├── index.css       # Arquivo principal que importa todos os estilos
    ├── tokens.css      # Design tokens e variáveis CSS
    ├── base.css        # Reset CSS e estilos base
    ├── layout.css      # Sistema de layout e grid
    ├── components.css  # Componentes reutilizáveis
    ├── utilities.css   # Classes utilitárias
    └── animations.css  # Animações customizadas
```

## Design Tokens

### Cores

#### Cores Primárias

- `--color-primary`: #ff4655 (Vermelho Valorant)
- `--color-primary-dark`: #e63946
- `--color-primary-light`: #ff6b77

#### Cores de Fundo

- `--color-bg-primary`: #0f1923 (Fundo principal)
- `--color-bg-secondary`: #1a252f
- `--color-bg-tertiary`: #2a3540
- `--color-bg-card`: #1e2a35
- `--color-bg-black`: #000000

#### Cores de Texto

- `--color-text-primary`: #ffffff
- `--color-text-secondary`: #b8c5d1
- `--color-text-muted`: #8a9ba8
- `--color-text-disabled`: #5a6b78

### Espaçamentos

- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px

### Tipografia

#### Tamanhos de Fonte

- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-base`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-2xl`: 24px
- `--font-size-3xl`: 30px
- `--font-size-4xl`: 36px
- `--font-size-5xl`: 48px
- `--font-size-6xl`: 60px

#### Famílias de Fonte

- `--font-family-primary`: 'Valorant', 'Bowlby One SC', sans-serif
- `--font-family-secondary`: 'Inter', sans-serif

### Breakpoints

- `--breakpoint-sm`: 640px
- `--breakpoint-md`: 768px
- `--breakpoint-lg`: 1024px
- `--breakpoint-xl`: 1280px
- `--breakpoint-2xl`: 1536px

## Componentes

### Botões

```html
<!-- Botão primário -->
<button class="btn btn--primary">Clique aqui</button>

<!-- Botão secundário -->
<button class="btn btn--secondary">Cancelar</button>

<!-- Botão ghost -->
<button class="btn btn--ghost">Mais informações</button>

<!-- Tamanhos -->
<button class="btn btn--primary btn--sm">Pequeno</button>
<button class="btn btn--primary btn--lg">Grande</button>
```

### Cards

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Título do Card</h3>
    <p class="card__subtitle">Subtítulo opcional</p>
  </div>
  <div class="card__body">
    <p>Conteúdo do card...</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Ação</button>
  </div>
</div>
```

### Badges

```html
<span class="badge badge--primary">Novo</span>
<span class="badge badge--success">Ativo</span>
<span class="badge badge--warning">Pendente</span>
<span class="badge badge--error">Erro</span>
```

## Sistema de Layout

### Container

```html
<div class="container">
  <!-- Conteúdo com largura máxima responsiva -->
</div>

<div class="container container--fluid">
  <!-- Conteúdo com largura total -->
</div>
```

### Grid System

```html
<!-- Grid responsivo -->
<div class="grid grid--cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Grid com gaps customizados -->
<div class="grid grid--cols-2 gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Flexbox

```html
<div class="flex justify-between items-center">
  <div>Item à esquerda</div>
  <div>Item à direita</div>
</div>

<div class="flex flex--column gap-md">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Classes Utilitárias

### Espaçamentos

```html
<!-- Margins -->
<div class="m-lg">Margin large</div>
<div class="mt-xl mb-lg">Margin top XL, bottom LG</div>
<div class="mx-auto">Margin horizontal auto</div>

<!-- Paddings -->
<div class="p-md">Padding medium</div>
<div class="px-lg py-xl">Padding horizontal LG, vertical XL</div>
```

### Cores

```html
<!-- Cores de texto -->
<p class="text-primary">Texto primário</p>
<p class="text-secondary">Texto secundário</p>
<p class="text-accent">Texto accent</p>

<!-- Cores de fundo -->
<div class="bg-primary">Fundo primário</div>
<div class="bg-card">Fundo de card</div>
```

### Tipografia

```html
<!-- Tamanhos -->
<h1 class="text-5xl font-bold">Título grande</h1>
<p class="text-base text-secondary">Texto normal</p>

<!-- Alinhamento -->
<p class="text-center">Texto centralizado</p>
<p class="text-right">Texto à direita</p>
```

## Animações

### Classes de Animação

```html
<!-- Animações de entrada -->
<div class="animate-fade-in-up">Fade in up</div>
<div class="animate-scale-in animate-delay-200">Scale in com delay</div>

<!-- Animações de hover -->
<div class="card-hover-lift">Card com efeito lift</div>
<div class="card-hover-glow">Card com efeito glow</div>

<!-- Animações infinitas -->
<div class="animate-pulse animate-infinite">Pulse infinito</div>
<div class="animate-float animate-infinite">Float infinito</div>
```

## Responsividade

O sistema utiliza uma abordagem mobile-first com breakpoints bem definidos:

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop Small**: 768px - 1024px
- **Desktop Large**: 1024px+

### Utilitários Responsivos

```html
<!-- Visibilidade responsiva -->
<div class="block md:hidden">Visível apenas no mobile</div>
<div class="hidden md:block">Visível apenas no desktop</div>

<!-- Grids responsivos -->
<div class="grid grid--cols-1 md:grid--cols-2 lg:grid--cols-3">
  <!-- Auto-responsivo -->
</div>
```

## Boas Práticas

### 1. Use Design Tokens

Sempre utilize as variáveis CSS definidas em `tokens.css` em vez de valores hardcoded.

```css
/* ✅ Correto */
.meu-componente {
  color: var(--color-text-primary);
  padding: var(--spacing-lg);
}

/* ❌ Evitar */
.meu-componente {
  color: #ffffff;
  padding: 24px;
}
```

### 2. Prefira Classes Utilitárias

Para pequenos ajustes, use classes utilitárias em vez de CSS customizado.

```html
<!-- ✅ Correto -->
<div class="flex items-center gap-md p-lg bg-card rounded-xl">Conteúdo</div>

<!-- ❌ Evitar criar CSS customizado para isso -->
```

### 3. Componentes Reutilizáveis

Para elementos que se repetem, use as classes de componentes definidas.

```html
<!-- ✅ Correto -->
<button class="btn btn--primary btn--lg">Botão Principal</button>

<!-- ❌ Evitar -->
<button style="background: #ff4655; padding: 16px 32px;">
  Botão Principal
</button>
```

### 4. Responsividade

Sempre teste em diferentes tamanhos de tela e use os utilitários responsivos.

### 5. Acessibilidade

- Use contrastes adequados
- Implemente foco visível
- Teste com navegação por teclado
- Use textos alternativos em imagens

## Migração dos Estilos Antigos

Os estilos antigos foram mantidos para compatibilidade, mas é recomendado migrar gradualmente:

1. **Substitua cores hardcoded** por design tokens
2. **Use o novo sistema de grid** em vez de flexbox manual
3. **Aplique classes utilitárias** para espaçamentos e cores
4. **Utilize componentes reutilizáveis** para botões, cards, etc.

## Extensão do Sistema

Para adicionar novos componentes ou utilitários:

1. **Tokens**: Adicione novas variáveis em `tokens.css`
2. **Componentes**: Adicione em `components.css`
3. **Utilitários**: Adicione em `utilities.css`
4. **Animações**: Adicione em `animations.css`

Mantenha a consistência com os padrões existentes e documente novas adições.
