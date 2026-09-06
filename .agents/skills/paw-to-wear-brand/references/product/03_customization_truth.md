# Customization Truth

**Status: CANONICAL for allowed pattern-level customization fields currently captured.**

| Pattern | Pattern Code | Pet Support | Allowed Customization Options | Pattern Notes | Catalog Status | Source / Rule |
| --- | --- | --- | --- | --- | --- | --- |
| Icon | 000 | 多宠, 单宠 | Pet, Name, Thread Color, Embroidery Location, Embroidery Size |  | Live | Uploaded Pattern master |
| Story | 001 | 多宠, 单宠 | Pet, Name, Thread Color, Embroidery Location, Embroidery Size |  | Live | Uploaded Pattern master |
| Halo | 002 | 单宠 | Pet, Name, Thread Color, Embroidery Location, Embroidery Size |  | Live | Uploaded Pattern master |
| Sleepyhead | 006 | 单宠 | Pet, Thread Color |  | Live | Uploaded Pattern master |
| Together | 008 | 单宠 | Pet, Human&Outfits, Gesture, Embroidery Location, Embroidery Size |  | Pattern master only | Uploaded Pattern master |
| Wander | 009 | 单宠 | Pet, Human&Outfits, Thread Color |  | Pattern master only | Uploaded Pattern master |
| Campus | 003 | 单宠 | Pet, Name, Birth Year | +城市 | Live | Uploaded Pattern master |
| Devotion | 004 | 单宠 | Pet, Name | +dad option | Live | Uploaded Pattern master |
| Crest | 007 | 多宠 | Pet, Name, Birth Year, Title, Embroidery Location, Embroidery Size, Thread Color | Title:option-VERY GOOD BOY/VERY GOOD GIRL | Live | Uploaded Pattern master |
| Vogue | 005 | 多宠 | Pet, Name, Embroidery Location, Embroidery Size, Thread Color |  | Live | Uploaded Pattern master |
| Groove | 012 | 多宠 | Pet, Name, Embroidery Location, Embroidery Size |  | Live | Uploaded Pattern master |
| Brew | 011 | 多宠 | Pet, Name, Embroidery Location, Embroidery Size, Thread Color |  | Live | Uploaded Pattern master |
| Bold | 010 | 单宠 | Pet, Title, Thread Color | Title: 下方小字, 默认值 Good Morning. | Live | Uploaded Pattern master |
| Urban | TBD | Not canonically defined in Pattern master | Live product UI exposes pet count, embroidery location, embroidery size, name, thread color, sleeve embroidery, and Customize More; canonical rule still needs to be added to Pattern master. | Do not let the agent infer the complete option set or fees until the Pattern master is updated. | Live product; missing from Pattern master | https://pawtowear.com/products/city-cool-t-shirt |

## Guardrail

Do not infer missing options or option prices. Customization pricing should be versioned separately by pattern + garment + option + value + effective date.
