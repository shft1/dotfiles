# Enable Powerlevel10k instant prompt
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Path to your Oh My Zsh installation
export ZSH="$HOME/.oh-my-zsh"
export PATH="$PATH:/Users/alexm/flutter/bin"
export PATH="$PATH":"$HOME/.pub-cache/bin"

export GOPATH=$(go env GOPATH)
export PATH="$PATH:$GOPATH/bin"

# Theme configuration
ZSH_THEME="powerlevel10k/powerlevel10k"

# Plugins
plugins=(git z zsh-autosuggestions zsh-syntax-highlighting web-search)

source $ZSH/oh-my-zsh.sh

# Load Powerlevel10k config
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# UV configuration (после загрузки oh-my-zsh)
if command -v uv >/dev/null 2>&1; then
  . "$HOME/.local/bin/env" 2>/dev/null
  eval "$(uv generate-shell-completion zsh 2>/dev/null)"
  eval "$(uvx --generate-shell-completion zsh 2>/dev/null)"
fi
