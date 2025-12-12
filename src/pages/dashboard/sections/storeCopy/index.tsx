import { Download } from "lucide-react"
import Button from "../../../../components/common/ui/Button"
import { Card } from "../../../../components/ui/card"

const copyContent = [
  {
    title: "Homepage Hero Section",
    content:
      "Welcome to Elite Store - your destination for premium beauty products. Discover our curated collection designed for Pet owners.",
  },
  {
    title: "About Us",
    content:
      "At Elite Store, we believe in quality and customer satisfaction. Our mission is to bring you the best beauty products at competitive prices.",
  },
  {
    title: "Shipping Policy",
    content:
      "We offer fast and reliable shipping worldwide. Orders are processed within 1-2 business days and typically arrive within 5-10 business days.",
  },
  {
    title: "Return Policy",
    content:
      "Not satisfied? We offer a 30-day money-back guarantee on all products. Simply contact our support team to initiate a return.",
  },
]

export const StoreCopy = () => {

  const handleCopyToClipboard = async (content: string, title: string) => {
    try {
      await navigator.clipboard.writeText(content)
      console.log("Copied to clipboard", title)
    } catch (err) {
      console.error("Failed to copy to clipboard", err)
    }
  }

  const handleDownloadPDF = () => {
    console.log("Download Started")
  }

  return (
    <div className=" bg-muted/30">
      <div className=" px-4 py-8 md:px-6 md:py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Store Copy</h1>
          <Button variant="outline" className="gap-2 bg-transparent" onClick={handleDownloadPDF}>
            <Download className="h-4 w-4" />
            Download Copy Pack (PDF)
          </Button>
        </div>

        {/* Copy Cards */}
        <div className="space-y-6">
          {copyContent.map((item, index) => (
            <Card key={index} className="p-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">{item.content}</p>
              <div 
              onClick={() => handleCopyToClipboard(item.content, item.title)}
              className="cursor-pointer text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                Copy to Clipboard
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
