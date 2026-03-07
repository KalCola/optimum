import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client'
import type { Props } from '@theme/DocRoot/Layout/Main'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import styles from './styles.module.scss'

/**
 * Safe wrapper: useDocsSidebar throws when called outside <DocsSidebarProvider>.
 * We call it inside a try/catch so that pages that render this theme override
 * without the provider won't crash — we just treat the sidebar as absent.
 *
 * Important: the hook call is unconditional (it remains a hook call on every render),
 * but if it throws we catch and return null. This keeps React hooks rules satisfied.
 */
function useSafeDocsSidebar() {
  try {
    return useDocsSidebar()
  } catch (e) {
    // Hook used outside provider; return a null/undefined fallback
    return null
  }
}

export default function DocRootLayoutMain({ hiddenSidebarContainer, children }: Props): ReactNode {
  const sidebar = useSafeDocsSidebar()

  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <div className={styles.docBackground} />
      <div className={clsx(styles.docItemWrapper)}>{children}</div>
    </main>
  )
}
