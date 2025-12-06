(function () {
  function updateTabWithBranch() {
    const branchLabel = document.querySelector(
      '#status\\.scm\\.0 .statusbar-item-label',
    )
    if (!branchLabel) {
      // No `git` or `.git/`, no branch label, or something similar
      return
    }
    const separator = ' | '
    const attrName = 'data-initial-name'

    const tab = document.querySelector('.single-tab .label-description')
    if (!tab) {
      return  // tab might not be there
    }
    
    if (tab.textContent.indexOf(separator) === -1) {
      // Initial case:
      tab.setAttribute(attrName, tab.textContent)
    } 

    // Branch name might be changed, needs an update:
    const originalName = tab.getAttribute(attrName)
    tab.textContent = `${originalName}${separator}${branchLabel.textContent}`
  }

  function updateColumnPosition() {
    const positionLabel = document.querySelector(
      '#status\\.editor\\.selection .statusbar-item-label'
    )
    
    if (!positionLabel || !positionLabel.textContent) {
      return
    }

    // Парсим русский текст: "Строка 110, столбец 2"
    const colMatch = positionLabel.textContent.match(/столбец\s*(\d+)/i)
    
    if (!colMatch) {
      return
    }

    const colNumber = colMatch[1]
    const currentLine = document.querySelector(
      '.line-numbers.active-line-number'
    )
    
    if (currentLine) {
      currentLine.textContent = colNumber
    }
  }

  // Initialize
  updateTabWithBranch()
  updateColumnPosition()

  // Set up intervals for updates
  setInterval(updateTabWithBranch, 50)
  setInterval(updateColumnPosition, 50)
})()
