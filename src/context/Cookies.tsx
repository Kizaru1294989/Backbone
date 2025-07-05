import { useState , useEffect } from "react"

const CookieConsent = ({ delayMs = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, delayMs)
      return () => clearTimeout(timer)
    }
  }, [delayMs])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    hideConsent()
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    hideConsent()
  }

  const hideConsent = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-md transform transition-all duration-300 ease-in-out ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="bg-white rounded-lg shadow-2xl border-2 border-gray-200">
          <div className="p-4 pb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 text-amber-600">🍪</div>
                <h3 className="text-lg font-semibold text-gray-900">Cookie Usage</h3>
              </div>
              <button onClick={hideConsent} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <div className="h-4 w-4 text-gray-500">✕</div>
              </button>
            </div>
            <p className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience and analyze our traffic.
            </p>
          </div>
          <div className="px-4 pb-4 space-y-4">
            <div className="text-sm text-gray-600">
              <p className="mb-2">By continuing to use this site, you accept our use of cookies for:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Remembering your preferences</li>
                <li>Analyzing website traffic</li>
                <li>Personalizing content</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                style={{ backgroundColor: "#4a5568" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2d3748"}
                onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4a5568"}
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleReject}
                className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Decline
              </button>
            </div>
            {/* <div className="text-xs text-center text-gray-500">
              <a href="/privacy" className="underline hover:text-gray-700 transition-colors">
                Learn more about our privacy policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}