const codes = new Set([
  "DASHBOARD_ORIGIN_MISMATCH",
  "DASHBOARD_STORAGE_UNAVAILABLE",
  "DASHBOARD_ACCESS_DENIED",
  "DASHBOARD_VERSION_EXISTS",
  "DASHBOARD_WRITE_UNKNOWN",
  "DASHBOARD_DELETE_BUSY",
  "DASHBOARD_DELETE_UNKNOWN",
  "DASHBOARD_CANCELLED",
  "MEGALADATA_RUNTIME_CLEANUP_FAILED",
  "MEGALADATA_REPLY_INVALID",
  "DASHBOARD_INPUT_INVALID",
  "MEGALADATA_GENERATION_UNAVAILABLE",
  "MEGALADATA_SCOPE_DENIED",
  "MEGALADATA_RECOVERY_REQUIRED",
  "MEGALADATA_CALL_UNCERTAIN",
  "MEGALADATA_CALL_BUSY",
  "MEGALADATA_CANDIDATE_INVALID",
  "MEGALADATA_SAVE_INVALID",
  "MEGALADATA_CANCEL_INVALID",
  "MEGALADATA_RECOVERY_INVALID",
  "MEGALADATA_CONFIG_REQUIRED",
  "MEGALADATA_CONNECTION_NOT_READY",
  "MEGALADATA_URL_INVALID",
  "MEGALADATA_USERNAME_INVALID",
  "MEGALADATA_REVISION_CONFLICT",
  "MEGALADATA_APPLICATION_PENDING",
  "MEGALADATA_APPLICATION_COMMITTING",
  "MEGALADATA_RECOVERY_BUSY",
  "MEGALADATA_RECOVERY_CONFLICT",
  "MEGALADATA_RECOVERY_UNAVAILABLE",
  "MEGALADATA_VALIDATION_EXPIRED",
  "MEGALADATA_CONNECTION_CHECK_FAILED",
  "MEGALADATA_KNOWLEDGE_AUTH_FAILED",
  "MEGALADATA_KNOWLEDGE_UNAVAILABLE",
  "MEGALADATA_KNOWLEDGE_FAILED",
  "MEGALADATA_KNOWLEDGE_TOOL_DENIED",
  "MEGALADATA_KNOWLEDGE_INTERRUPTED",
  "MEGALADATA_KNOWLEDGE_REQUEST_INVALID",
  "MEGALADATA_KNOWLEDGE_REQUEST_BUSY",
  "MEGALADATA_KNOWLEDGE_CATALOG_INVALID",
  "MEGALADATA_KNOWLEDGE_CLOSED",
  "MEGALADATA_LOGIN_REJECTED",
  "MEGALADATA_ACCOUNT_MISMATCH",
  "MEGALADATA_LOGIN_UNAVAILABLE",
  "MEGALADATA_BROWSER_START_FAILED",
  "MEGALADATA_RUNTIME_START_FAILED",
  "MEGALADATA_RUNTIME_UNAVAILABLE",
  "MEGALADATA_STORE_READ_FAILED",
  "MEGALADATA_STORE_WRITE_FAILED",
  "MEGALADATA_CREDENTIAL_PROTECTION_UNAVAILABLE",
  "MEGALADATA_CREDENTIAL_FORMAT_INVALID",
  "MEGALADATA_HOST_CLOSED",
  "MEGALADATA_HOST_NOT_READY",
  "MEGALADATA_HOST_CLEANUP_FAILED",
  "MEGALADATA_HANDSHAKE_INVALID",
  "MEGALADATA_METHOD_INVALID",
  "MEGALADATA_INPUT_INVALID",
  "MEGALADATA_INPUT_IDENTITY_CONFLICT",
  "MEGALADATA_FILE_TOO_LARGE",
  "MEGALADATA_FILE_NOT_FOUND",
  "MEGALADATA_FILE_NOT_REGULAR",
  "MEGALADATA_FILE_ACCESS_DENIED",
  "MEGALADATA_FILE_CHANGED",
  "MEGALADATA_UPLOAD_CANCELLED",
  "MEGALADATA_UPLOAD_UNCERTAIN",
])

export function hostError(value: unknown) {
  const code =
    value instanceof Error
      ? value.message
      : value && typeof value === "object" && "error" in value
        ? value.error
        : value
  return typeof code === "string" && codes.has(code) ? code : "MEGALADATA_HOST_REQUEST_FAILED"
}

const reasons: Record<string, string> = {
  DASHBOARD_CANCELLED: "Операция dashboard отменена.",
  DASHBOARD_WRITE_UNKNOWN: "Результат публикации неизвестен. Проверьте версию на стенде; повторная запись автоматически не выполняется.",
  DASHBOARD_DELETE_BUSY: "Этот дашборд уже удаляется. Повторите запрос после завершения операции.",
  DASHBOARD_DELETE_UNKNOWN: "Не удалось подтвердить результат удаления версий. Повторная команда начнётся с проверки стенда.",
  DASHBOARD_STORAGE_UNAVAILABLE: "Не удалось прочитать хранилище публикаций или установить принадлежность версий.",
  DASHBOARD_VERSION_EXISTS: "Имя публикации уже занято. Существующая версия сохранена.",
  DASHBOARD_ACCESS_DENIED: "Недостаточно прав для чтения или записи публикации в Megaladata.",
  DASHBOARD_ORIGIN_MISMATCH: "Подключение относится к другому стенду. Откройте dashboard заново из Studio.",
  MEGALADATA_GENERATION_UNAVAILABLE: "Подключение изменилось. Откройте dashboard заново из Studio.",
  MEGALADATA_FILE_TOO_LARGE: "Файл превышает лимит этого способа передачи.",
  MEGALADATA_FILE_NOT_FOUND: "Файл не найден. Укажите существующий путь.",
  MEGALADATA_FILE_NOT_REGULAR: "Нужен обычный файл, а не каталог или специальный файл.",
  MEGALADATA_FILE_ACCESS_DENIED: "Доступ к файлу запрещён. Не повторяйте чтение обходным путём.",
  MEGALADATA_FILE_CHANGED: "Файл изменился. Заново выберите и подтвердите актуальный файл.",
  MEGALADATA_UPLOAD_CANCELLED: "Загрузка отменена.",
  MEGALADATA_UPLOAD_UNCERTAIN: "Остановка или уборка загрузки не подтверждена. Не отправляйте файл повторно.",
}

// Private IPC carries only these fields. Never forward an exception's message,
// path, cause, stack, file bytes or arbitrary details across the trust boundary.
export function hostFailure(value: unknown) {
  const error = hostError(value)
  const reason = reasons[error]
  if (!reason) return { error }
  const source = value && typeof value === "object" && "details" in value ? value.details : undefined
  const details: { reason: string; actual?: number; limit?: number; hint?: string } = { reason }
  if (error === "MEGALADATA_FILE_TOO_LARGE") {
    for (const key of ["actual", "limit"] as const) {
      const number = source && typeof source === "object" ? Reflect.get(source, key) : undefined
      if (typeof number === "number" && Number.isSafeInteger(number) && number >= 0) details[key] = number
    }
    details.hint = "Укажите путь; для больших файлов будет профиль и выборка. Сейчас выберите файл меньшего размера."
  }
  return { error, details }
}

export function hostException(value: unknown) {
  const failure = hostFailure(value)
  return Object.assign(new Error(failure.error), failure.details ? { details: failure.details } : {})
}

export function hostErrorText(value: unknown) {
  const failure = hostFailure(value)
  return failure.error + (failure.details ? ": " + JSON.stringify(failure.details) : "")
}

export function fileError(value: unknown) {
  const code = value && typeof value === "object" && "code" in value ? value.code : undefined
  const reason = value && typeof value === "object" && "reason" in value ? value.reason : undefined
  const tag = reason && typeof reason === "object" && "_tag" in reason ? reason._tag : undefined
  return hostException(
    ["ENOENT", "ENOTDIR"].includes(String(code)) || tag === "NotFound"
      ? "MEGALADATA_FILE_NOT_FOUND"
      : ["EACCES", "EPERM"].includes(String(code)) || tag === "PermissionDenied"
        ? "MEGALADATA_FILE_ACCESS_DENIED"
        : code === "EISDIR"
          ? "MEGALADATA_FILE_NOT_REGULAR"
          : value,
  )
}
