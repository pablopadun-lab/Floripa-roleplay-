# Floripa City Roleplay - Site

Este repositório contém um site estático simples (HTML/CSS/JS) para a comunidade Floripa City Roleplay.

Deploy recomendado: GitHub Pages (branch `main`).

Passos rápidos para publicar:

1. Commit e push do repositório para GitHub.
2. No repositório GitHub, vá em *Settings > Pages* e selecione `main` como branch (pasta `/`).
3. O arquivo `CNAME` já está presente com `www.floripapacity.com` — após a ativação, o GitHub Pages usará esse domínio.

Configurar DNS (no provedor do domínio):

- Crie um registro CNAME para `www` apontando para `<username>.github.io` (substitua `<username>` pelo seu usuário ou organização do GitHub) OU siga as instruções do GitHub Pages para apontar um domínio apex.

Testes locais:

```bash
# abrir em um servidor simples com Python 3
python3 -m http.server 8000
# abra http://localhost:8000 no navegador
```

O repositório já inclui um workflow GitHub Actions (`.github/workflows/pages.yml`) que publica automaticamente para o GitHub Pages quando você der push na branch `main`.

Se quiser, eu posso ajudar a configurar o DNS no provedor do domínio ou ajustar o site (favicon, imagens, textos).
